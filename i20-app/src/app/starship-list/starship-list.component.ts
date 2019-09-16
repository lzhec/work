import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.sass']
})
export class StarshipListComponent implements OnInit {
	ShipList: any
  items: any
  filteredItems: any
  pageOfItems: any
  film: number
  switch: string
  errorMessage: string

  constructor(private router: Router, private appDataService: AppDataService) { }

  async ngOnInit() {
    this.items = await this.appDataService.getItems('starships', '')

    if (this.filteredItems) {
      this.items = this.filteredItems
    }
    
    this.ShipList = this.items    
  }

  onChangePage(pageOfItems: Array<any>) {        
    this.pageOfItems = pageOfItems
  }

  showShipDetail(url: string) {
  	let id = url.replace(/[^-0-9]/gim,'')
    this.router.navigate(['/starship-detail', id])
  }

  searchShip(event: any) { 
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
    this.film = null
    this.filteredItems = []
    this.items = this.ShipList

    return this.items
  }

  getFilm(number: number) {
    this.filteredItems = []
    this.items = this.ShipList
    this.film = number

    this.items.forEach(item => {
    	item.films.forEach(i => {
    		if (+i.replace(/[^-0-9]/gim,'') === number) {   			
    			this.filteredItems.push(item)
        	this.items = this.filteredItems
    		}
    	})      
    })

    return this.items
  }

}
