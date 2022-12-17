import { CommonModule } from '@angular/common';
import { Component, inject, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { ImageLink, ImageOptions } from 'src/app/models/page.model';
import SwiperCore, { Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination, SwiperOptions, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, EffectCoverflow, Autoplay]);

@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [CommonModule, SwiperModule],
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {
	private router: Router = inject(Router);
	private route: ActivatedRoute = inject(ActivatedRoute);
	private zone: NgZone = inject(NgZone);

	@Input() options!: ImageOptions;

	public images: ImageLink[] = [];

	public config: SwiperOptions = {}

	ngOnInit(): void {
		this.config = { ...this.config, ...this.getConfig(this.options) };
	}

	public navigateByIndex(index: number): void {
		const path = this.images[index]?.route;
		this.navigate(path);
	}

	public navigate(path?: string): void {
		if (!path) return;

		this.zone.run(() => this.router.navigate([path], { relativeTo: this.route }));
	}

	private getConfig(options: ImageOptions): SwiperOptions {
		switch (options.type) {
			case 'single-image':
				this.images = [{ imageURL: options.imageURL }];
				return {

				}
			case 'images-gallery':
				this.images = options.imageURLs.map(imageURL => ({ imageURL }));
				return {
					keyboard: true,
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
					autoplay: !options.autoplay ? false : {
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}
				};
			case 'images-links':
				this.images = options.images;
				return {
					slidesPerView: options.images.length,
					preventClicks: false,
				}
			default:
				return {};
		}
	}
}
