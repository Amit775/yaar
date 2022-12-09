import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/models/page.model';

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	page$: Observable<Page> = inject(ActivatedRoute).data as Observable<Page>;
}
