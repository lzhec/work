import { Injectable } from '@angular/core';

export interface Icons {
	imgFile: string
	url: string
	alt: string
}

export interface MainConfigSettings {
	showUserControls?: boolean
	socialLinks?: Array<Icons>
}

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
	showUserControls = true
	socialLinks = new Array<Icons>()
	configure(settings: MainConfigSettings): void {
		Object.assign(this, settings)
	}

  constructor() { }
}
