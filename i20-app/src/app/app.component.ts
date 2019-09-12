import { Component } from '@angular/core';
import { MenuService } from '../spa/services/menu.service';
import { SpaConfigService, SpaConfigSettings } from '../spa/services/spa-config.service';
import { AppMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

	constructor(private spaConfigService: SpaConfigService, private menuService: MenuService) {
		const config: SpaConfigSettings = {
   		showUserControls: true
   	}
   	
   	spaConfigService.configure(config)
   	menuService.items = AppMenuItems;
 	}

  title = 'i20-app';
}
