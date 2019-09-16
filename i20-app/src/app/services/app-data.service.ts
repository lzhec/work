import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject } from 'rxjs';
import { Hero } from './hero-interface';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
	private url = 'https://swapi.co/'
  items: Array<any> = []
  options: Array<any> = []
  option: string
  public subject = new BehaviorSubject(0)

  constructor(private http: HttpClient) { }
  
  async getItems(str: string, options: string) {
    if (!options) {
      this.items = []
    }
    this.options = []
    const sizeResult: any = await this.http.get(this.url + '/api/' + str).toPromise()
    let size = Math.ceil(sizeResult.count/10)
    const promises = []

    for (let i = 1; i <= size; i++) {
      const promise = this.http.get(this.url + '/api/' + str + '/?page=' + i).toPromise()
      promises.push(promise)
    }

    const result = await Promise.all(promises)  

    result.forEach(item => {
      if (!options) {
        this.items = this.items.concat(item.results) 
      } else this.options = this.options.concat(item.results)    
    })

    if (!options) {
      return this.items
    } else return this.options           
  }

  _getItem(id: number) {
    if (this.items) {
      const item = this.items.find(i => +i.url.replace(/[^-0-9]/gim,'') === id)
      return of(item)
    }       
  }

  searchItem(hero) {
    let array = []
    let check = false

    this.items.forEach(item => {
      for (var key in hero) {
        if (item.hasOwnProperty(key) && hero[key] && item[key]) {
          if ((typeof item[key] === 'string' && item[key].toLowerCase().includes(hero[key].toLowerCase())) || (item[key].includes(hero[key].toLowerCase()))) {
            check = true           
          } else {
            check = false
            return check
          }
        }
      }
      if (check) {
        array.push(item)
      }
    })

    return array
  }

  searchItems(_term, list: any, check: boolean) {    
    let items: any = []
    let array: any
    let term = _term.target.value

    if (_term.code === 'Backspace' && (!check)) {
      array = this.items  
    } else array = list

    let property
    if (array.length > 0) {
      array.forEach(item => {
        if (item.name) {
          property = item.name
        } else if (item.title) {
          property = item.title
        }

        if (property.toLowerCase().includes(term.toLowerCase())) {
          items.push(item)
        }
      })
    }
         
    Object.assign(items)    
    return of(items)
  }

  async getOptions(str: string) {   
    let promise = await this.http.get<any>(str).toPromise()
         
    return promise.name  
  }

  setSubject(subject) {
    this.subject.next(subject)
  }

  getSubject() {
    return this.subject.asObservable()
  }
}
