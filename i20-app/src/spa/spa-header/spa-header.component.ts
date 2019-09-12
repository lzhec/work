import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.sass']
})
export class SpaHeaderComponent implements OnInit {
	flagForIcons = true;
	
  constructor(private screenService: ScreenService, private menuService: MenuService) { }

  ngOnInit() {
  }

}
