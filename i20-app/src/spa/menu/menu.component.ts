import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'spa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  /*link(item: any) {
  	console.log(item)
  }*/

}
