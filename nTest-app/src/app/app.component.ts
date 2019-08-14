import { Component } from '@angular/core';
import { MainConfigService, MainConfigSettings, Icons } from '../main/services/main-config/main-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(private mainConfigService: MainConfigService) {
		const config: MainConfigSettings = {
			socialLinks: [
				{imgFile: '../assets/img/facebook.svg', url: 'http://facebook.com', alt: 'Facebook'},
				{imgFile: '../assets/img/instagram.svg', url: 'http://instagram.com', alt: 'Instagram'},
				{imgFile: '../assets/img/youtube.svg', url: 'http://youtube.com', alt: 'Youtube'},
				{imgFile: '../assets/img/vk.svg', url: 'http://vk.com', alt: 'VC'},
			],
			showUserControls: true
		}
		mainConfigService.configure(config)
	}
  title = 'nTest-app';
}
