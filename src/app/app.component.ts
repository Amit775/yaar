import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Section } from './models/page.model';
import { sections } from './pages/pages';
import { PagesService } from './pages/pages.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	title = 'yaar';

	public tabs: Section[] =[];
	languages: string[] = ['he', 'en'];

	constructor(private service: PagesService) { }

	ngOnInit(): void {
		this.tabs = this.service.setPages(sections);
	}
}
