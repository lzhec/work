import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SpaModule } from '../spa/spa.module';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { UserApi } from '../spa/users/user-api';
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    TransactionComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, {
    provide: UserApi, useExisting: UserService
  }, AuthGuardService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
