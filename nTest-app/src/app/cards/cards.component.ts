import { Component, OnInit } from '@angular/core';
import { Card } from '../services/card/card-interface';
import { FieldInput } from '../../main/dynamicForms/field-interface';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data/app-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
	CardList: Array<Card>
	cardDefinitionInput: Array<FieldInput> = [
		{
			key: 'tag',
			type: 'string',
			isId: false,
			label: 'Card tag',
			required: false
		}
	]
	deleteError: string
	deleteId: number
	isDeleting = false
	errorMessage: string

  constructor(private router: Router, private appDataService: AppDataService) {
  	appDataService.getCards().subscribe((data) => {
  		this.CardList = data
  	})
  }
  	
  ngOnInit() {
  }

  createCard() {
  	this.router.navigate(['/auth/card-detail', 0, 'create'])
  }

	showCardDetail(id: number) {
		this.router.navigate(['/auth/card-detail', id, 'read'])
	}

	editCard(id: number) {
		this.router.navigate(['/auth/card-detail', id, 'edit'])
	}

	deleteCardQuestion(id: number) {
		this.deleteError = null
		this.deleteId = id
	}

	cancelDelete() {
		this.isDeleting = false
		this.deleteId = null
	}

	deleteCard(id: number) {
		this.isDeleting = true
		this.appDataService.deleteCard(id).subscribe(success => this.cancelDelete(), error => {
			this.deleteError = error
			this.isDeleting = false
		})
	}

	searchCard(event: any) {					
		this.appDataService.searchCard(event.target.value).subscribe(success => this.CardList = success, error => this.errorMessage = 'No items matched your search')
	}
}
