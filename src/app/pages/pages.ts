import { Section } from "../models/page.model";

export const sections: Section[] = [
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
			{
				display: 'יעקב יער', route: 'yaakov-yaar', redirectTo: '', items: [
					{
						display: 'יעקב יער',
						route: '',
						description: 'יעקב יער',
						image: 'someURL',
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
						image: 'someURL',
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
						image: 'someURL',
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
						image: 'someURL',
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
				route: 'residential',
				redirectTo: 'market-square',
				items: [
					{
						title: 'כיכר השוק - מתחם השוק הסיטונאי בתל אביב 2006 - 1999',
						display: 'כיכר השוק - תל אביב',
						description: '',
						image: { images: [], manual: true },
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
					image: { images: [], manual: true },
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
					image: { images: [], manual: true },
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
					image: { images: [], manual: true },
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
					image: { images: [], manual: true },
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
				route: 'news',
				redirectTo: '1',
				items: [
					{
						display: 'חדשות 1',
						title: 'חדשות 1',
						route: '1',
						description: 'חדשות 1',
						image: 'someURL'
					}, {
						display: 'חדשות 2',
						title: 'חדשות 2',
						route: '2',
						description: 'חדשות 2',
						image: 'someURL'
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
						image: 'someURL'
					}, {
						display: 'פרסומים 2',
						title: 'פרסומים 2',
						route: '2',
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