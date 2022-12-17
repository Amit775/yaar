import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, UrlSegment } from '@angular/router';
import { filter, map, MonoTypeOperatorFunction, Observable, tap } from 'rxjs';
import { Category, Page, Section } from 'src/app/models/page.model';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';
import { PagesService } from '../pages.service';

function debug<T>(name: string): MonoTypeOperatorFunction<T> {
	if (true) return (source) => source;
	return (source: Observable<T>) => source.pipe(tap(value => console.log(name, value)));
}

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [CommonModule, RouterModule, GalleryComponent],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
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

	constructor(private service: PagesService) { }
}
