import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Category, Page, Section } from 'src/app/models/page.model';
import { SeperatorPipe } from 'src/app/shared/seperator.pipe';

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [CommonModule, SeperatorPipe],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	page$: Observable<Section> = inject(ActivatedRoute).data as Observable<Section>;
}
