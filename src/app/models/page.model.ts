export type Page = {
	route: string;
	title: string;
	description: string;
	image: string | ImageGalleryOptions | ImageLink[];
}

type Display = {
	display: string;
}

export type Tab = Display & { route: string; }

export type Item = Page & Display;

export type Section = Page & Display & {
	categories?: Category[];
}

export type Category = Display & {
	items?: Item[];
}

export type ImageGalleryOptions = {
	images: string[];
	manual: boolean;
}

export type ImageLink = {
	image: string;
	route: string;
}