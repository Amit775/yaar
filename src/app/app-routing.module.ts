import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Category, Page, Section } from './models/page.model';
import { PageComponent } from './pages/page/page.component';
import { sections } from './pages/pages';

function createRouteForPage(path: string, data: Page): Route {
	return { path, data, component: PageComponent };
}
function extractRoutes(sections: Section[]): Routes {
	const routes: Routes = [];
	sections.forEach((section: Section) => {
		routes.push(createRouteForPage(section.route, section));
		section.categories?.forEach((category: Category) => {
			const segments = [section.route, category.route];
			routes.push({ path: segments.join('/'), redirectTo: [...segments, category.redirectTo].join('/') });

			const itemRoutes = category.items?.map(item => createRouteForPage([...segments, item.route].join('/'), item)) ?? [];
			routes.push(...itemRoutes);
		});
	});

	console.table(routes);
	return routes;
}
const routes: Routes = [
	...extractRoutes(sections),
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
