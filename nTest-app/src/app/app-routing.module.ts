import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from '../main/users/sign-in/sign-in.component';
import { SignUpComponent } from '../main/users/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


const routes: Routes = [
	{path: 'sign-in', component: SignInComponent},
	{path: 'sign-up', component: SignUpComponent},
	{path: 'auth', component: AuthComponent, canActivate: [AuthGuardService], children: [
		{path: '', canActivateChild: [AuthGuardService], children: [
			{path: 'home', component: HomeComponent},
			{path: 'cards', component: CardsComponent},
			{path: 'card-detail/:id/:operation', component: CardComponent}
		]}
	]},	
	{path: '', redirectTo: 'sign-in', pathMatch: 'full'},
	{path: '**', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
