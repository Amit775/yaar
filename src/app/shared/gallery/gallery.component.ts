import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { ImageOptions } from 'src/app/models/page.model';
import { imageURLs } from 'src/app/pages/pages';
import SwiperCore, { EffectCoverflow, Keyboard, Navigation, Pagination, SwiperOptions, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, EffectCoverflow]);

@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [CommonModule, SwiperModule],
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {
	@Input() options!: ImageOptions;

	public imagesURLs: string[] = imageURLs;

	public config: SwiperOptions = {
		navigation: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			depth: 100,
			slideShadows: false
		},
		pagination: {
			el: '.swiper-pagination',
		},
	};
	ngOnChanges(changes: SimpleChanges): void {
		// this.config = this.getConfig(this.options);
		console.log(changes);
	}

	onSwiper(event: unknown): void {
		console.log('swiper', event);
	}

	private getConfig(options: ImageOptions): SwiperOptions {
		this.imagesURLs = imageURLs;
		console.log(this.imagesURLs);
		return {}
		// switch (options.type) {
		// 	case 'single-image':
		// 		this.imagesURLs = [options.imageURL];
		// 		return {

		// 		}
		// 	case 'images-gallery':
		// 		this.imagesURLs = options.imageURLs;
		// 		return {
		// 			pagination: true,
		// 			navigation: true
		// 		}

		// 	case 'images-links':
		// 		this.imagesURLs = options.images.map(image => image.imageURL);
		// 		return {

		// 		}
		// 	default:
		// 		return {};
		// }
	}
}
