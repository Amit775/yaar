import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Category, Page, Section } from './models/page.model';
import { PageComponent } from './pages/page/page.component';
import { sections } from './pages/pages';

function createRouteForPage(path: string, data: Page): Route {
	return {
		path,
		data,
		component: PageComponent
	}
}
function extractRoutes(sections: Section[]): Routes {
	const routes: Routes = [];
	sections.forEach((section: Section) => {
		routes.push(createRouteForPage(section.route, section));
		section.categories?.forEach((category: Category) => {
			routes.push(...category.items?.map(item => createRouteForPage(`${section.route}/${category.route}${item.route ? '/' : ''}${item.route}`, item)) ?? [])
		});
	});

	console.table(routes);
	return routes;
}
const routes: Routes = extractRoutes(sections);

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
