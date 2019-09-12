import {MenuItem} from '../spa/services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
  {
  	text: 'Heroes',
		icon: 'assets/img/hero.png',
		route: '/hero-list',
		submenu: [
    	{
    		text: 'Filter1',
				icon: 'assets/img/hero.png',
				route: '/hero-list/filter1',
				submenu: null
			},
			{
				text: 'Filter2',
				icon: 'assets/img/hero.png',
				route: '/hero-list/filter2',
				submenu: null
			}]
	},
	{
  	text: 'Films',
		icon: 'assets/img/film.png',
		route: '/film-list',
		submenu: [
    	{
    		text: 'Filter1',
				icon: 'assets/img/film.png',
				route: '/film-list/filter1',
				submenu: null
			},
			{
				text: 'Filter2',
				icon: 'assets/img/film.png',
				route: '/film-list/filter2',
				submenu: null
			}]
	},
	{
  	text: 'Starships',
		icon: 'assets/img/starship.png',
		route: '/starship-list',
		submenu: [
    	{
    		text: 'Filter1',
				icon: 'assets/img/starship.png',
				route: '/starship-list/filter1',
				submenu: null
			},
			{
				text: 'Filter2',
				icon: 'assets/img/starship.png',
				route: '/starship-list/filter2',
				submenu: null
			}]
	},
	{
		text: 'Home',
		icon: 'assets/img/home.png',
		route: '/home',
		submenu: null
	}
]
