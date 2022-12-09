import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { pages } from './pages/pages';

const routes: Routes = pages.map(page => ({
	path: page.route,
	component: PageComponent,
	data: page
}));

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
