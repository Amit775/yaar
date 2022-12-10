import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Section } from 'src/app/models/page.model';
import { SeperatorPipe } from 'src/app/shared/seperator.pipe';

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [CommonModule, SeperatorPipe, RouterModule],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	section$: Observable<Section> = inject(ActivatedRoute).data as Observable<Section>;
	selectedCategory$: Observable<Category> = this.section$.pipe();
	readonly seperator = { display: '|' };

}
