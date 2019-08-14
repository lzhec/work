import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Card } from '../card/card-interface';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
	private CardsCollection: Array<Card> = [
		{id: 1, name: 'Card1', text: 'Text1', tag: 'Tag1'},
		{id: 2, name: 'Card2', text: 'Text2', tag: 'Tag2'},
		{id: 3, name: 'Card3', text: 'Text3', tag: 'Tag3'},
		{id: 4, name: 'Card4', text: 'Text4', tag: 'Tag4'},
		{id: 5, name: 'Card5', text: 'Text5', tag: 'Tag5'},
		{id: 6, name: 'Card6', text: 'Text6', tag: 'Tag6'},
		{id: 7, name: 'Card7', text: 'Text7', tag: 'Tag7'},
		{id: 8, name: 'Card8', text: 'Text8', tag: 'Tag8'},
		{id: 9, name: 'Card9', text: 'Text9', tag: 'Tag9'},
		{id: 10, name: 'Card10', text: 'Text10', tag: 'Tag10'}
	]

  constructor(private userService: UserService) { }

  getCards(): Observable<Card[]> {
  	return of(this.CardsCollection)
  }

  getCard(id: number): Observable<Card> {
  	const card = this.CardsCollection.find(item => item.id === id)
  	return of(card)
  }

  deleteCard(id: number): Observable<any> {
  	return of({}).pipe(delay(2000), map(() => this.CardsCollection.splice(this.CardsCollection.findIndex(item => item.id === id), 1)))
  }

  createCard(newCard: Card): Observable<any> {
  	let id = 0
  	this.CardsCollection.forEach(item => {
  		if (item.id >= id) {
  			id = item.id + 1
  		}
  	})

  	newCard.id = id
  	this.CardsCollection.push(newCard)
  	return of(newCard)
  }

  updateCard(CardForUpdating: Card): Observable<any> {
  	const card = this.CardsCollection.find(item => item.id === CardForUpdating.id)
  	Object.assign(card, CardForUpdating)
  	return of(card).pipe(delay(1000))
  }

  searchCard(term: any): Observable<any> {
  	console.log(term)  	
  	let cards = []
  	let split = term.split(' ')
  	console.log(split)
  	let check = false
  	this.CardsCollection.forEach(item => {
  		split.forEach(i => {
  			if ((i !== '' && item.tag.toLowerCase().includes(i.toLowerCase())) || (i === '' && split.length == 1)) {
  				check = true
  			}
  		})
  		if (check === true) {
  			cards.push(item)
  			check = false
  			console.log(cards)
  		}
  	})   	  	
  	Object.assign(cards)  	
  	return of(cards)
  }

}
	