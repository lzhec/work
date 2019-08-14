import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen/screen.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
	flagForIcons = true
  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
