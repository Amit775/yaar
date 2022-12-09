import { Section } from "../models/page.model";

export const pages: Section[] = [
	{
		route: '',
		description: 'home',
		title: 'יער',
		image: { images: [], manual: false },
		display: 'יער אדריכלים'
	}, {
		route: 'office',
		description: 'Office',
		display: 'המשרד',
		title: 'יער אדריכלים ומתכנני ערים',
		image: 'someURL',
		categories: [
			{ display: 'יעקב יער' },
			{ display: 'אורה יער' },
			{ display: 'אביב יער' },
			{ display: 'טלי קוסט יער' }
		]
	}, {
		display: 'פרוייקטים',
		route: 'projects',
		title: 'פרוייקטים',
		description: 'פרוייקטים',
		image: [
			{ image: 'residential', route: 'residential' },
			{ image: 'mixed-use', route: 'mixed-use' },
			{ image: 'public-buildings', route: 'public-buildings' },
			{ image: 'urban-design', route: 'urban-design' },
			{ image: 'preservation-and-renewal', route: 'preservation-and-renewal' },
			{ image: 'competitions', route: 'competitions' },
		],
		categories: [
			{
				display: 'מגורים',
				items: [{
					title: 'כיכר השוק - מתחם השוק הסיטונאי בתל אביב 2006 - 1999',
					display: 'כיכר השוק - תל אביב',
					description: '',
					image: { images: [], manual: true },
					route: 'market-square'
				}]
			},
			{
				display: 'שימושים מעורבים',
				items: [{
					title: 'מתחם סומייל - תל אביב 1997-2006',
					display: 'סומייל - תל אביב',
					description: '',
					image: { images: [], manual: true },
					route: 'somile'
				}]
			},
			{
				display: 'בנייני ציבור',
				items: [{
					title: 'קריית הטכניון - תכנית אב 1986-1988',
					display: 'קריית הטכניון',
					description: '',
					image: { images: [], manual: true },
					route: 'market-square'
				}]
			},
			{
				display: 'עיצוב עירוני ובינוי ערים',
				items: [{
					title: 'נמל יפו',
					display: 'נמל יפו',
					description: '',
					image: { images: [], manual: true },
					route: 'jaffa-port'
				}]
			},
			{
				display: 'שימור והתחדשות',
				items: [{
					title: 'יפו העתיקה 1960-1975',
					display: 'יפו העתיקה',
					description: '',
					image: { images: [], manual: true },
					route: 'old-jaffa'
				}]
			},
			{
				display: 'תחרויות',
				items: [{
					title: 'תחרות כלשהי',
					display: 'תחרות',
					description: '',
					image: { images: [], manual: true },
					route: 'competition'
				}]
			}
		]
	}, {
		display: 'חדשות ופרסומים',
		route: 'publications',
		description: 'פרסומים',
		title: 'חדשות ופרסומים',
		image: 'someURL',
		categories: [
			{
				display: 'חדשות',
				items: [
					{
						display: 'חדשות 1',
						title: 'חדשות 1',
						route: 'publications/news/1',
						description: 'חדשות 1',
						image: 'someURL'
					}, {
						display: 'חדשות 2',
						title: 'חדשות 2',
						route: 'publications/news/2',
						description: 'חדשות 2',
						image: 'someURL'
					}
				]
			}, {
				display: 'פרסומים',
				items: [
					{
						display: 'פרסומים 1',
						title: 'פרסומים 1',
						route: 'publications/pub/1',
						description: 'פרסומים 1',
						image: 'someURL'
					}, {
						display: 'פרסומים 2',
						title: 'פרסומים 2',
						route: 'publications/pub/2',
						description: 'פרסומים 2',
						image: 'someURL'
					}
				]
			}
		]
	}, {
		display: 'קשר',
		description: 'צרו קשר',
		image: 'someURL',
		route: 'contacts',
		title: 'קשר'
	}
]