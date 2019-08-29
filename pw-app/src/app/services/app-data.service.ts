import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Transaction } from './transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
	private url = 'http://193.124.114.46:3001'
	transactions: Array<any>
	public subject = new BehaviorSubject<number>(0)

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    return this.http.get(this.url + '/api/protected/transactions', options).pipe(map((data) => {    	     
      return this.transactions = Object.values(data)[0]    
    }))
  }

  getTransaction(id: number): Observable<Transaction> {
  	const transaction = this.transactions.find(item => item.id === id)
  	return of(transaction)
  }

  createTransaction(newTransaction: Transaction): Observable<any> {
  	const body = {
  		name: newTransaction.username,
  		amount: Math.abs(newTransaction.amount)
  	}
  	const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    if (newTransaction.username != localStorage.getItem('user') && newTransaction.amount <= +localStorage.getItem('balance')) {
	    return this.http.post(this.url + '/api/protected/transactions', body, options).pipe(delay(2000), map((data) => {
	    	localStorage.setItem('balance', Object.values(data)[0].balance)   	
	      return this.setSubject(Object.values(data)[0].balance) 
	    })) 
    } else return throwError('ERROR')
  }

  searchTransaction(term: any): Observable<any> {  	
  	let transactions = []
  	let split = term.split(' ')
  	let check = false
  	this.transactions.forEach(item => {
  		split.forEach(i => {
  			if ((i !== '' && item.username.toLowerCase().includes(i.toLowerCase())) || (i !== '' && item.date.toLowerCase().includes(i.toLowerCase())) || (i === '' && split.length == 1)) {
  				check = true
  			}
  		})
  		if (check === true) {
  			transactions.push(item)
  			check = false  			
  		}
  	})   	  	
  	Object.assign(transactions)  	
  	return of(transactions)
  }

  getUsers(term: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    const body = {
      filter: term
    }

    return this.http.post(this.url + '/api/protected/users/list', body, options).pipe(map((data) => {       
      return data    
    }))
  }

  setSubject(subject) {
  	this.subject.next(subject)
  }

  getSubject() {
  	return this.subject.asObservable()
  }
}
