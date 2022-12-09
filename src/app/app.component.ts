import { Component } from '@angular/core';
import { Tab } from './models/page.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'yaar';

	tabs: Tab[] = [
		{ route: 'office', display: 'המשרד' },
		{ route: 'projects', display: 'פרוייקטים' },
		{ route: 'news', display: 'חדשות ופרסומים' },
		{ route: 'contacts', display: 'קשר' },
	];

	languages: string[] = ['he', 'en']
}
