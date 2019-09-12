import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../services/app-data.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
	hero: any

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService, private location: Location) { }

  ngOnInit() {
  	this.appDataService._getItem(+this.route.snapshot.params['id']).subscribe((hero) => this.hero = hero)
  }

  onBack() {
    this.location.back()
  }

}
