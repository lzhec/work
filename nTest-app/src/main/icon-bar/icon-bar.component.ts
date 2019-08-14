import { Component, OnInit, Input } from '@angular/core';
import { MainConfigService } from '../services/main-config/main-config.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.sass']
})
export class IconBarComponent implements OnInit {
	showLoader: boolean

	@Input()
		showIcons

  constructor(private mainConfigService: MainConfigService, private userApi: UserApi) { }

  ngOnInit() {
  	this.showLoader = false
  }

  signOut() {
  	this.showLoader = true

  	setTimeout(() => {
  		this.userApi.signOut()
  	}, 2000)

  	console.log('Sign Out')
  }

}
