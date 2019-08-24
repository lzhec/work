import { Injectable } from '@angular/core';

export interface Icons {
	imgFile: string
	url: string
	alt: string
}

export interface SpaConfigSettings {
	showUserControls?: boolean
	socialLinks?: Array<Icons>
}

@Injectable({
  providedIn: 'root'
})
export class SpaConfigService {
	showUserControls = true
	socialLinks = new Array<Icons>()
	configure(settings: SpaConfigSettings): void {
		Object.assign(this, settings)
	}

  constructor() { }
}
