import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { MenuComponent } from './menu/menu.component';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [ScreenLargeDirective, ScreenSmallDirective, MenuComponent, SpaBodyComponent, SpaContentComponent, SpaHeaderComponent, SpaFooterComponent, MenuItemComponent, PopupMenuComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SpaBodyComponent],
  providers: [ScreenService, MenuService]
})
export class SpaModule { }
