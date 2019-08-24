import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.sass']
})
export class SpaFooterComponent implements OnInit {
	title = 'Все права защищены'
	year = new Date().getFullYear()
  constructor() { }

  ngOnInit() {
  }

}
