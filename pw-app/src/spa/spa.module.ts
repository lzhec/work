import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { ScreenService } from './services/screen.service';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { SpaConfigService } from './services/spa-config.service';
import { TransactionFieldComponent } from './dynamicForms/transaction-field/transaction-field.component';
import { TransactionFormComponent } from './dynamicForms/transaction-form/transaction-form.component';



@NgModule({
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaContentComponent, SpaFooterComponent, SignInComponent, SignUpComponent, ScreenLargeDirective, ScreenSmallDirective, IconBarComponent, TransactionFieldComponent, TransactionFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SpaBodyComponent, TransactionFormComponent, TransactionFieldComponent],
  providers: [ScreenService, SpaConfigService]
})
export class SpaModule { }
