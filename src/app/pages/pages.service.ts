import { Injectable } from "@angular/core";
import { Category, Page, Section } from "../models/page.model";

type HashSet<T> = Record<string, T>;

@Injectable({ providedIn: 'root' })
export class PagesService {
	private _pages: HashSet<Page> = {};
	public get pages(): Readonly<HashSet<Page>> { return this._pages; }

	private _categories: HashSet<Category> = {};
	public get categories(): Readonly<HashSet<Category>> { return this._categories; }

	private _sections: HashSet<Section> = {}
	public get sections(): Readonly<HashSet<Section>> { return this._sections; }


	public setPages(sections: Section[]): Section[] {
		sections.forEach((section: Section) => {
			this._sections[section.route] = section;
			this._pages[section.route] = section;

			section.categories?.forEach((category: Category) => {
				this._categories[category.route] = category;
				category.items?.forEach((item: Page) => {
					this._pages[item.route] = item;
				});
			});
		});

		return sections;
	}
}