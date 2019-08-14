import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainModule } from '../main/main.module';
import { UserService } from './services/user/user.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AppDataService } from './services/app-data/app-data.service';
import { UserApi } from '../main/users/user-api';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CardsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    FormsModule
  ],
  providers: [UserService, {
    provide: UserApi, useExisting: UserService
  }, AuthGuardService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
