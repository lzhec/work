import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainConfigService } from './services/main-config/main-config.service';
import { ScreenService } from './services/screen/screen.service';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { DynamicFieldComponent } from './dynamicForms/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamicForms/dynamic-form/dynamic-form.component';


@NgModule({
	imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [MainBodyComponent, MainHeaderComponent, MainContentComponent, MainFooterComponent, SignInComponent, SignUpComponent, IconBarComponent, ScreenLargeDirective, ScreenSmallDirective, DynamicFieldComponent, DynamicFormComponent],
  exports: [MainBodyComponent, DynamicFormComponent],
  providers: [MainConfigService, ScreenService]
})
export class MainModule { }
