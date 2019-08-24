import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaConfigService } from '../services/spa-config.service';
import { UserApi } from '../users/user-api';
//import { User } from '../../app/services/user-interface';
import { UserService } from '../../app/services/user.service';
import { AppDataService } from '../../app/services/app-data.service';

@Component({
  selector: 'spa-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.sass']
})
export class IconBarComponent implements OnInit {
	showLoader: boolean
  public balance: Observable<number>
  public username: Observable<string>

	@Input() showIcons 

  constructor(private spaConfigService: SpaConfigService, private userApi: UserApi, private userService: UserService, private appDataService: AppDataService, private router: Router) {
    userService.getUser().subscribe((data) => {
      this.appDataService.setSubject(data.balance)
      this.balance = this.appDataService.getSubject()
      this.username = data.name    
    })
  }

  ngOnInit() {    
  }

  signOut() {
  	this.showLoader = true

  	setTimeout(() => {
  		this.userApi.signOut()
  	}, 2000)

  	console.log('Sign Out')
  }

}
