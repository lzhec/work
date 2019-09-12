import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {
	HeroList: any
  items: any
  filteredItems: any
  pageOfItems: any
  gender: string
  switch: string
  errorMessage: string
  
  constructor(private router: Router, private appDataService: AppDataService) { }

  async ngOnInit() {
    this.items = await this.appDataService.getItems('people')

    if (this.filteredItems) {
      this.items = this.filteredItems
    }
    
    this.HeroList = this.items    
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

    this.appDataService.searchItem(event, list, check).subscribe(success =>
      this.items = success, 
      error => this.errorMessage = 'No items matched your search')
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
