import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../app/services/user.service';

@Component({
  selector: 'spa-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
	registering = false
	hasAdded = false
	formError: string
  confirm = true

  constructor(private router: Router, private userService: UserService) { }

  passwordMatch() {

  }

  onSubmit(signUpForm: NgForm) {
  	this.registering = true
  	this.formError = null
    if (signUpForm.value.password === signUpForm.value.confirmPassword) {
      this.confirm = true
    	this.userService.registerUser(signUpForm.value).subscribe((data) => {
    		setTimeout(() => {this.hasAdded = true}, 1200)
    		setTimeout(() => {this.router.navigate(['/sign-in'])}, 2000)
    	},
    	(error) => {
    		this.formError = error.error  		
    		console.log(error)
    		this.registering = false
  			this.hasAdded = true
    	})
    } else {
      this.confirm = false
    }

  	setTimeout(() => {
  		this.registering = false
  		this.hasAdded = false
  	}, 2000) 
				
  }
  ngOnInit() {
  }

}
