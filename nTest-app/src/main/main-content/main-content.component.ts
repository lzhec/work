import { Component, OnInit } from '@angular/core';
//import { CardsComponent } from '../../app/cards/cards.component';
import { ScreenService } from '../services/screen/screen.service';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
