import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


const routes: Routes = [
	{path: 'home', component: AppHomeComponent},
	{path: 'hero-list', component: HeroListComponent},
	{path: 'film-list', component: FilmListComponent},
	{path: 'starship-list', component: StarshipListComponent},
	{path: 'hero-detail/:id', component: HeroDetailComponent},
	{path: 'film-detail/:id', component: FilmDetailComponent},
	{path: 'starship-detail/:id', component: StarshipDetailComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: AppHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
