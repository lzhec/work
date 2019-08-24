import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '..//services/user-interface';
import { UserApi } from '../../spa/users/user-api';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserApi {
	isAuthenticated = false
	token: any	
	private url = 'http://193.124.114.46:3001'
  users: Array<any>		
	
  constructor(private router: Router, private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
  	const body = {email, password}

  	return this.http.post(this.url + '/sessions/create', body).pipe(delay(2000), map((response: Response) => {
      if (response.hasOwnProperty('id_token')) {
        this.token = Object.values(response)[0]
        localStorage.setItem('token', this.token)        
        this.isAuthenticated = true
      } else {
        return throwError('Invalid email or password')
      }
      
  		//localStorage.setItem()  		
  		//const arrayFilter: User[] = response.json().filter((item: User) => item.email === email && item.password === password)
  		/*if (arrayFilter.length !== 0 ) {
  			this.isAuthenticated = true
  			localStorage.setItem('user', JSON.stringify(arrayFilter[0]))
  			//this.DataTransfer = [arrayFilter[0].name]
  		}*/
  	}))  	
  }

  signOut(): Observable<any> {
  	this.isAuthenticated = false
  	localStorage.clear()
  	this.router.navigate(['/sign-in'])
  	return of({})
  }

  registerUser(registerForm: User) {
  	return this.http.post(this.url + '/users', {username: registerForm.name, password: registerForm.password, email: registerForm.email})
  }

  getUser(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }  	  	
    return this.http.get(this.url + '/api/protected/user-info', options).pipe(map((data) => {        
      return Object.values(data)[0]      
      /*localStorage.setItem('userId', x.id)
      localStorage.setItem('username', x.name)
      localStorage.setItem('userEmail', x.email)
      localStorage.setItem('userBalance', x.balance)*/
    }))
  }
}
