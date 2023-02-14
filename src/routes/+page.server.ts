import type { PageServerLoad } from './$types';

export const csr = true;

export const load = (() => {
	return {
		projects: [
			{
				name: "Door to Dough",
				description: "This is some information about door to dough",
				tools: [
					"SwiftUI", "Kotlin Multiplatform", "Flutter", "NodeJS"
				]
			},
			{
				name: "Ward 11",
				description: "This is some information about ward",
				tools: [
					"SwiftUI", "Kotlin Multiplatform", "Flutter", "NodeJS"
				]
			},
			{
				name: "Buonappe",
				description: "This is some information about buonappe",
				tools: [
					"SwiftUI", "Kotlin Multiplatform", "Flutter", "NodeJS"
				]
			},
			{
				name: "Milysto",
				description: "This is some information about milysto",
				tools: [
					"SwiftUI", "Kotlin Multiplatform", "Flutter", "NodeJS"
				]
			},
			{
				name: "Roop",
				description: "This is some information about roop",
				tools: [
					"SwiftUI", "Kotlin Multiplatform", "Flutter", "NodeJS"
				]
			},
		],
		facilities: [
			{
				name: 'The Fish Stop',
				description:
					'We are based in Dehiwala sdhfdshjf asfjklsafjl assadjfsljf asfsaljkfasf asf sdfkjsdlf sdlkdfjdsk sdfsdfjlks sdfsdfkl',
				image: 'pexels-fish.jpg',
				details: [
					'Exceptional quality live ornamental fish',
					'Consistent supplies',
					'Widest selection of ornamental fish',
					'This is nice'
				]
			},
			{
				name: 'The Fish Park',
				description:
					'Lorem ipsum dolor sit amet consectetur. Vel felis eu dignissim aliquam tellus nullam pellentesque.',
				image: 'pexels-fish-2.jpg',
				details: [
					'Exceptional quality live ornamental fish',
					'Consistent supplies for all countries',
					'Widest selection of ornamental fish is really great'
				]
			}
		],
		catalog: [
			{
				title: 'Fresh Fish',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg'
			},
			{
				title: 'Salt Water Fish',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg'
			},
			{
				title: 'Shrimp',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg'
			},
			{
				title: 'Ornaments',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg'
			}
		],
		feed: [
			{
				title: 'News Item 1',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg',
				date: '11-02-2023'
			},
			{
				title: 'News Item 2',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg',
				date: '12-02-2023'
			},
			{
				title: 'News Item 3',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg',
				date: '13-02-2023'
			},
			{
				title: 'News Item 4',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg',
				date: '15-02-2023'
			},
			{
				title: 'News Item 4',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg',
				date: '15-02-2023'
			},
			{
				title: 'News Item 4',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg',
				date: '15-02-2023'
			},
			{
				title: 'News Item 4',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish.jpg',
				date: '15-02-2023'
			},
			{
				title: 'News Item 4',
				description:
					'asfsafljjs knsknvlksdlkcsdlkfjsl nsk cslkvjdskdsvkdsjkjs lmsc skvsdkvjsdkvds mksl',
				image: 'pexels-fish-2.jpg',
				date: '15-02-2023'
			}
		],
		contacts: [
			{
				title: 'Location 1',
				description: 'View Location',
				type: 'address'
			},
			{
				title: 'Location 2',
				description: 'View Location',
				type: 'address'
			},
			{
				title: 'Location 3',
				description: 'View Location',
				type: 'address'
			},
			{
				title: 'Phone',
				description: '+94778123123',
				type: 'phone'
			},
			{
				title: 'Email',
				description: 'thefishstop@gmail.com',
				type: 'email'
			}
		]
	};
}) satisfies PageServerLoad;
