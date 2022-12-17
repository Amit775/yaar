import { Section } from "../models/page.model";

export const imageURLs: string[] = [
	'http://yaar.yaar.net/images/stories/projects/homePage/14.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/16.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/17.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/18.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/20.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/22.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/23.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/24.jpg',
	'http://yaar.yaar.net/images/stories/projects/homePage/26.jpg',
]

export const sections: Section[] = [
	{
		route: '',
		description: 'home',
		title: 'יער',
		image: { type: 'images-gallery', imageURLs, manual: false },
		display: 'יער אדריכלים'
	}, {
		route: 'office',
		description: 'Office',
		display: 'המשרד',
		title: 'יער אדריכלים ומתכנני ערים',
		image: { type: 'single-image', imageURL: imageURLs[0] },
		categories: [
			{
				display: 'יעקב יער', route: 'yaakov-yaar', redirectTo: '', items: [
					{
						display: 'יעקב יער',
						route: '',
						description: 'יעקב יער',
						image: { type: 'single-image', imageURL: imageURLs[0] },
						title: 'יעקב יער'
					}
				]
			},
			{
				display: 'אורה יער', route: 'ora-yaar', redirectTo: '', items: [
					{
						display: 'אורה יער',
						route: '',
						description: 'אורה יער',
						image: { type: 'single-image', imageURL: imageURLs[0] },
						title: 'אורה יער'
					}
				]
			},
			{
				display: 'אביב יער', route: 'aviv-yaar', redirectTo: '', items: [
					{
						display: 'אביב יער',
						route: '',
						description: 'אביב יער',
						image: { type: 'single-image', imageURL: imageURLs[0] },
						title: 'אביב יער'
					}
				]
			},
			{
				display: 'טלי קוסט יער', route: 'tali-kost-yaar', redirectTo: '', items: [
					{
						display: 'טלי קוסט יער',
						route: '',
						description: 'טלי קוסט יער',
						image: { type: 'single-image', imageURL: imageURLs[0] },
						title: 'טלי קוסט יער'
					}
				]
			}
		]
	}, {
		display: 'פרוייקטים',
		route: 'projects',
		title: 'פרוייקטים',
		description: 'פרוייקטים',
		image: {
			type: 'images-links', images: [
				{ imageURL: imageURLs[0], route: 'residential' },
				{ imageURL: imageURLs[1], route: 'mixed-use' },
				{ imageURL: imageURLs[2], route: 'public-buildings' },
				{ imageURL: imageURLs[0], route: 'urban-design' },
				{ imageURL: imageURLs[1], route: 'preservation-and-renewal' },
				{ imageURL: imageURLs[2], route: 'competitions' },
			]
		},
		categories: [
			{
				display: 'מגורים',
				route: 'residential',
				redirectTo: 'market-square',
				items: [
					{
						title: 'כיכר השוק - מתחם השוק הסיטונאי בתל אביב 2006 - 1999',
						display: 'כיכר השוק - תל אביב',
						description: '',
						image: { type: "images-gallery", imageURLs, manual: true },
						route: 'market-square'
					}]
			},
			{
				display: 'שימושים מעורבים',
				route: 'mixed-use',
				redirectTo: 'somile',
				items: [{
					title: 'מתחם סומייל - תל אביב 1997-2006',
					display: 'סומייל - תל אביב',
					description: '',
					image: { type: "images-gallery", imageURLs, manual: true },
					route: 'somile'
				}]
			},
			{
				display: 'בנייני ציבור',
				route: 'public-buildings',
				redirectTo: 'technion-campus',
				items: [{
					title: 'קריית הטכניון - תכנית אב 1986-1988',
					display: 'קריית הטכניון',
					description: '',
					image: { type: "images-gallery", imageURLs, manual: true },
					route: 'technion-campus'
				}]
			},
			{
				display: 'עיצוב עירוני ובינוי ערים',
				route: 'urban-design',
				redirectTo: 'jaffa-port',
				items: [{
					title: 'נמל יפו',
					display: 'נמל יפו',
					description: '',
					image: { type: "images-gallery", imageURLs, manual: true },
					route: 'jaffa-port'
				}]
			},
			{
				display: 'שימור והתחדשות',
				route: 'preservation-and-renewal',
				redirectTo: 'old-jaffa',
				items: [{
					title: 'יפו העתיקה 1960-1975',
					display: 'יפו העתיקה',
					description: '',
					image: { type: "images-gallery", imageURLs, manual: true },
					route: 'old-jaffa'
				}]
			},
			{
				display: 'תחרויות',
				route: 'competitions',
				redirectTo: 'competition',
				items: [{
					title: 'תחרות כלשהי',
					display: 'תחרות',
					description: '',
					image: { type: "images-gallery", imageURLs, manual: true },
					route: 'competition'
				}]
			}
		]
	}, {
		display: 'חדשות ופרסומים',
		route: 'publications',
		description: 'פרסומים',
		title: 'חדשות ופרסומים',
		image: { type: 'single-image', imageURL: imageURLs[0] },
		categories: [
			{
				display: 'חדשות',
				route: 'news',
				redirectTo: '1',
				items: [
					{
						display: 'חדשות 1',
						title: 'חדשות 1',
						route: '1',
						description: 'חדשות 1',
						image: { type: 'single-image', imageURL: imageURLs[0] }
					}, {
						display: 'חדשות 2',
						title: 'חדשות 2',
						route: '2',
						description: 'חדשות 2',
						image: { type: 'single-image', imageURL: imageURLs[0] }
					}
				]
			}, {
				display: 'פרסומים',
				route: 'publications',
				redirectTo: '1',
				items: [
					{
						display: 'פרסומים 1',
						title: 'פרסומים 1',
						route: '1',
						description: 'פרסומים 1',
						image: { type: 'single-image', imageURL: imageURLs[0] }
					}, {
						display: 'פרסומים 2',
						title: 'פרסומים 2',
						route: '2',
						description: 'פרסומים 2',
						image: { type: 'single-image', imageURL: imageURLs[0] }
					}
				]
			}
		]
	}, {
		display: 'קשר',
		description: 'צרו קשר',
		image: { type: 'single-image', imageURL: imageURLs[0] },
		route: 'contacts',
		title: 'קשר'
	}
]