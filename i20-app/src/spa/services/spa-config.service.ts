import { Injectable } from '@angular/core';

export interface SpaConfigSettings {
    showUserControls?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SpaConfigService {
	showUserControls = true;  
  configure(settings: SpaConfigSettings): void {
    Object.assign(this, settings);
  }
  
  constructor() { }
}
