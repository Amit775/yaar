export type Page = Link & {
	title: string;
	description: string;
	image: string | ImageGalleryOptions | ImageLink[];
}

export type Link = {
	route: string;
	display: string;
}

export type Section = Page & {
	categories?: Category[];
}

export type Category = Link & {
	redirectTo?: string;
	items?: Page[];
}

export type ImageGalleryOptions = {
	images: string[];
	manual: boolean;
}

export type ImageLink = {
	image: string;
	route: string;
}