export type Page = Link & {
	title: string;
	description: string;
	image: ImageOptions;
}

export type SingleImageOption = {
	type: 'single-image';
	imageURL: string;
}

export type ImagesGalleyOption = {
	type: 'images-gallery';
	imageURLs: string[];
	autoplay: boolean;
}

export type ImagesLinksOption = {
	type: 'images-links';
	images: ImageLink[];
}

export type ImageOptions = SingleImageOption | ImagesGalleyOption | ImagesLinksOption;

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

export type ImageLink = {
	imageURL: string;
	route?: string;
}