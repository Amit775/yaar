import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
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
export class GalleryComponent implements OnChanges, OnInit {
	@Input() options!: ImageOptions;

	public imagesURLs: string[] = [];

	public config: SwiperOptions = {}

	ngOnInit(): void {
		this.config = this.getConfig(this.options);
	}
	ngOnChanges(changes: SimpleChanges): void {
	}

	onSwiper(event: unknown): void {
		console.log('swiper', event);
	}

	private getConfig(options: ImageOptions): SwiperOptions {
		switch (options.type) {
			case 'single-image':
				this.imagesURLs = [options.imageURL];
				return {

				}
			case 'images-gallery':
				this.imagesURLs = options.imageURLs;
				return {
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
			case 'images-links':
				this.imagesURLs = options.images.map(image => image.imageURL);
				return {
					slidesPerView: options.images.length
				}
			default:
				return {};
		}
	}
}
