import { Component } from '@angular/core';
import { Section } from './models/page.model';
import { sections } from './pages/pages';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'yaar';
	readonly seperator = { display: '|' };

	tabs: Section[] = sections;

	languages: string[] = ['he', 'en']
}
