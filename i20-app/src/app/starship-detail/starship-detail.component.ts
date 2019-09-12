import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.sass']
})
export class StarshipDetailComponent implements OnInit {
ship: any

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService, private location: Location) { }

  ngOnInit() {
  	this.appDataService._getItem(+this.route.snapshot.params['id']).subscribe((ship) => this.ship = ship)
  }

  onBack() {
    this.location.back()
  }

}
