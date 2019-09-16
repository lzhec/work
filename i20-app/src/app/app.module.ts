import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpaModule } from '../spa/spa.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AppDataService } from './services/app-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    HeroListComponent,
    StarshipListComponent,
    FilmListComponent,
    FilmDetailComponent,
    StarshipDetailComponent,
    HeroDetailComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    SpaModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
