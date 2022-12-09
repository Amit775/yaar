import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ImageGalleryOptions } from 'src/app/models/page.model';

@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
	@Input() options!: ImageGalleryOptions;
}
