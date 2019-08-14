import { Component, OnInit } from '@angular/core';
import { FieldInput } from '../../main/dynamicForms/field-interface';
import { Card } from '../services/card/card-interface';
import { AppDataService } from '../services/app-data/app-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
	card: Card
	cardDefinitionInput: Array<FieldInput> =[
		{
			key: 'id',
			type: 'number',
			isId: true,
			label: 'Id',
			required: true
		},
		{
			key: 'name',
			type: 'string',
			isId: false,
			label: 'Card name',
			required: true
		},
		{
			key: 'text',
			type: 'string',
			isId: false,
			label: 'Card text',
			required: true
		},
		{
			key: 'tag',
			type: 'string',
			isId: false,
			label: 'Card tag',
			required: true
		}
	]

	operation: string //edit, create, read
	errorMessage: string

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService) {

  }

  ngOnInit() {
  	this.operation = this.route.snapshot.params['operation']
  	if (this.operation === 'create') {
  		this.card = {id: 0, name: '', text: '', tag: ''}
  	} else {
  		this.appDataService.getCard(+this.route.snapshot.params['id']).subscribe((card: Card) => this.card = card)
  	}
  }

  createCard(card: Card) {
  	card.id = 0
  	this.errorMessage = null
  	this.appDataService.createCard(card).subscribe(success => this.router.navigate(['/auth/cards']), error => this.errorMessage = 'Creating card error')
  }

  updateCard(card: Card) {
  	this.errorMessage = null
  	this.appDataService.updateCard(card).subscribe(success => this.router.navigate(['/auth/cards']), error => this.errorMessage = 'Updating card error')
  }

}
