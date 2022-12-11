import { Injectable } from "@angular/core";
import { Category, Page, Section } from "../models/page.model";

type HashSet<T> = Record<string, T>;

@Injectable({ providedIn: 'root' })
export class PagesService {
	pages: HashSet<Page> = {};
	categories: HashSet<Category> = {};

	public setPages(sections: Section[]): void {
		sections.forEach((section: Section) => {
			this.pages[section.route] = section;

			section.categories?.forEach((category: Category) => {
				this.categories[category.route] = category;
				category.items?.forEach((item: Page) => {
					this.pages[item.route] = item;
				});
			});
		});
	}
}