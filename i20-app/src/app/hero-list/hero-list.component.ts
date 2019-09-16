import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { FieldInput } from '../../spa/dynamicForms/field-interface';
import { Hero } from '../services/hero-interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {
	HeroList: Array<Hero>
  items: Array<Hero>
  filteredItems: Array<Hero>
  hero: Hero
  heroDefinitionInput: Array<FieldInput> = [
    {
      key: 'species',
      type: 'Array<string> & url',
      isId: false,
      label: 'Race'
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Сharacter name'
    },
    {
      key: 'hair_color',
      type: 'Array<string>',
      isId: false,
      label: 'Сharacter hairs color'
    },
    {
      key: 'eye_color',
      type: 'Array<string>',
      isId: false,
      label: 'Сharacter eyes color'
    },
    {
      key: 'skin_color',
      type: 'Array<string>',
      isId: false,
      label: 'Сharacter skin color'
    },    
    {
      key: 'homeworld',
      type: 'Array<string> & url',
      isId: false,
      label: 'Homeworld'
    },
    
    {
      key: 'vehicles',
      type: 'Array<string> & url',
      isId: false,
      label: 'Transport of character'
    },
    {
      key: 'starships',
      type: 'Array<string> & url',
      isId: false,
      label: 'Starships of character'
    },
    {
      key: 'films',
      type: 'Array<string> & url',
      isId: false,
      label: 'Episodes'
    }
  ]
  pageOfItems: any
  gender: string
  switch: string
  errorMessage: string
  status = false
  
  constructor(private router: Router, private appDataService: AppDataService) { }

  async ngOnInit() {
    this.items = await this.appDataService.getItems('people', '')

    if (this.filteredItems) {
      this.items = this.filteredItems
    }
    
    this.HeroList = this.items
    this.appDataService.setSubject(this.HeroList)
  }

  onChangePage(pageOfItems: Array<any>) {        
    this.pageOfItems = pageOfItems
  }

  showHeroDetail(url: string) {
  	let id = url.replace(/[^-0-9]/gim,'')
    this.router.navigate(['/hero-detail', id])
  }

  searchHero(event: any) { 
    let list: any
    let check = false    

    if (!this.filteredItems || this.filteredItems.length === 0)  {  
      list = this.items
    } else {
      list = this.filteredItems
      check = true
    }

    this.appDataService.searchItems(event, list, check).subscribe(success =>
      this.items = success, 
      error => this.errorMessage = 'No items matched your search')
  }

  searchItem(formGroup) {
    this.items = this.appDataService.searchItem(formGroup.value)
    this.status = true
  }

  changeStatus() {
    this.status = false
  }

  getAll() {
    this.gender = null
    this.filteredItems = []
    this.items = this.HeroList

    return this.items
  }

  getGender() {
    this.filteredItems = []
    this.items = this.HeroList

    if (this.gender) {
      if (this.gender === 'female') {
        this.gender = 'male'
        this.switch = 'Female'
      } else {
        this.gender = 'female'
        this.switch = 'Male'
      }
    } else {
      this.gender = 'male'
      this.switch = 'Female'
    } 

    this.items.forEach(item => {
      if (item.gender === this.gender) {
        this.filteredItems.push(item)
        this.items = this.filteredItems
      }
    })

    return this.items
  }
}
