import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {
	film: any

  constructor(private router: Router, private route: ActivatedRoute, private appDataService: AppDataService, private location: Location) { }

  ngOnInit() {
  	this.appDataService._getItem(+this.route.snapshot.params['id']).subscribe((film) => this.film = film)
  }

  onBack() {
    this.location.back()
  }

}
