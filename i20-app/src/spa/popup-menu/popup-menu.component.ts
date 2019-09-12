import { Component, OnInit, Input } from '@angular/core';
import { MenuService, MenuItem } from '../services/menu.service';

@Component({
  selector: 'spa-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.sass']
})
export class PopupMenuComponent implements OnInit {
	@Input() menu: Array<MenuItem>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
