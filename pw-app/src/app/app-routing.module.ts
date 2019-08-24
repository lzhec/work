import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from '../spa/users/sign-in/sign-in.component';
import { SignUpComponent } from '../spa/users/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{path: 'sign-in', component: SignInComponent},
	{path: 'sign-up', component: SignUpComponent},
	{path: 'auth', component: AuthComponent, canActivate: [AuthGuardService], children: [
		{path: '', canActivateChild: [AuthGuardService], children: [
			{path: 'home', component: HomeComponent},	
			{path: 'users', component: UserComponent},	
			{path: 'transaction-detail/:id/:operation', component: TransactionComponent}		
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
