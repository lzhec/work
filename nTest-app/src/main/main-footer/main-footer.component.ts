import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.sass']
})
export class MainFooterComponent implements OnInit {
	title = 'Все права защищены'
	year = new Date().getFullYear()
  constructor() { }

  ngOnInit() {
  }

}
