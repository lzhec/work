import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass']
})
export class FilmListComponent implements OnInit {
	FilmList: any
  items: any
  filteredItems: any
  pageOfItems: any
  hero: number
  switch: string
  errorMessage: string

  constructor(private router: Router, private appDataService: AppDataService) { }

  async ngOnInit() {
    this.items = await this.appDataService.getItems('films', '')

    if (this.filteredItems) {
      this.items = this.filteredItems
    }
    
    this.FilmList = this.items    
  }

  onChangePage(pageOfItems: Array<any>) {        
    this.pageOfItems = pageOfItems
  }

  showFilmDetail(url: string) {
  	let id = url.replace(/[^-0-9]/gim,'')
    this.router.navigate(['/film-detail', id])
  }

  searchFilm(event: any) { 
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

  getAll() {
    this.hero = null
    this.filteredItems = []
    this.items = this.FilmList
    
    return this.items
  }

  getHero() {
    this.filteredItems = []
    this.items = this.FilmList

    if (this.hero) {
      if (this.hero === 4) {
        this.hero = 1
        this.switch = 'Darth Vader'
      } else {
        this.hero = 4
        this.switch = 'Luke Skywalker'
      }
    } else {
      this.hero = 1
      this.switch = 'Darth Vader'
    } 

    this.items.forEach(item => {
    	item.characters.forEach(i => {
    		if (+i.replace(/[^-0-9]/gim,'') === this.hero) {   			
    			this.filteredItems.push(item)
        	this.items = this.filteredItems
    		}
    	})      
    })

    return this.items
  }

}
