export type Page = {
	route: string;
	title: string;
	description: string;
	image: string | ImageGalleryOptions;
}

type Display = {
	display: string;
}

export type Tab = Display & { route: string; }

export type Item = Page & Display;

export type Section = Page & Display & {
	segments: Segment[];
}

export type Segment = Display & {
	items: Item[];
}

export type ImageGalleryOptions = {
	images: string[];
	manual: boolean;
}