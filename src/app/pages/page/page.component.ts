import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, UrlSegment } from '@angular/router';
import { filter, map, MonoTypeOperatorFunction, Observable, tap } from 'rxjs';
import { Category, Page, Section } from 'src/app/models/page.model';
import { SeperatorPipe } from 'src/app/shared/seperator.pipe';
import { sections } from '../pages';
import { PagesService } from '../pages.service';

function debug<T>(name: string): MonoTypeOperatorFunction<T> {
	if (true) return (source) => source;
	return (source: Observable<T>) => source.pipe(tap(value => console.log(name, value)));
}

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [CommonModule, SeperatorPipe, RouterModule],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
	route: ActivatedRoute = inject(ActivatedRoute);
	page$: Observable<Page> = this.route.data as Observable<Page>;
	section$: Observable<Section> = this.route.url.pipe(map(([section, _]: UrlSegment[]) => {
		return this.service.pages[section?.path];
	}), debug('section'));

	categories$: Observable<Category[]> = this.section$.pipe(map(section => section?.categories), filter(Boolean), debug('categories'));
	selectedCategory$: Observable<Category> = this.route.url.pipe(map(([_section, category, _item]) => {
		return this.service.categories[category?.path]
	}), debug('selectedCategory'));

	items$ = this.selectedCategory$.pipe(map((category: Category) => category?.items), debug('items'));

	readonly seperator = { display: '|' };

	constructor(private service: PagesService) { }
	ngOnInit(): void {
		this.service.setPages(sections);
		this.route.url.subscribe(x => console.log(x));
	}
}
