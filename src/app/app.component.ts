import { Component } from '@angular/core';
import { Tab } from './models/page.model';
import { pages } from './pages/pages';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'yaar';

	tabs: Tab[] = pages;

	languages: string[] = ['he', 'en']
}
