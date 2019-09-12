import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
	private url = 'https://swapi.co/'
  items: Array<any> = []

  constructor(private http: HttpClient) { }
  
  async getItems(str: string) {
    this.items = []
    const sizeResult: any = await this.http.get(this.url + '/api/' + str).toPromise()
    let size = Math.ceil(sizeResult.count/10)
    const promises = []

    for (let i = 1; i <= size; i++) {
      const promise = this.http.get(this.url + '/api/' + str + '/?page=' + i).toPromise()
      promises.push(promise)
    }

    const result = await Promise.all(promises)    

    result.forEach(item => {
      this.items = this.items.concat(item.results)      
    })

    return this.items       
  }

  _getItem(id: number) {
    if (this.items) {
      const item = this.items.find(i => +i.url.replace(/[^-0-9]/gim,'') === id)
      return of(item)
    }       
  }

  searchItem(_term, list: any, check: boolean) {    
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
}
