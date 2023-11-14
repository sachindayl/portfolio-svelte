import type { PageServerLoad } from '../$types';

// export const csr = true;

export const load = (() => {
	return {
		packages: [
			{
				name: 'Basic - Web',
				isPopular: false,
				pricing: {
					oneTime: 399,
					month: 0,
					year: 0
				},
				coverage: ['One page website', 'Basic Design', 'Basic SEO', 'Basic Analytics'],
				description: "Good for a simple website with a single page. It's a good start for a small business."
			},
			{
				name: 'Standard - Web',
				isPopular: true,
				pricing: {
					oneTime: 799,
					month: 0,
					year: 0
				},
				coverage: [
					'Up to 5 pages',
					'Basic Design',
					'Basic SEO',
					'Basic Analytics',
					'Contact Form',
					'Google Maps'
				],
				description: 'Good for a small business with a few pages. It has everything you need to start.'
			},
			{
				name: 'Premium - Web',
				isPopular: false,
				pricing: {
					oneTime: 1499,
					month: 0,
					year: 0
				},
				coverage: [
					'Up to 10 pages',
					'Improved Design',
					'Improved SEO',
					'Improved Analytics',
					'Contact Form',
					'Google Maps',
					'Google Search Console',
					'Google Analytics'
				],
				description: 'Good for growing businesses. It has everything you need to advance and more.'
			}
		]
	};
}) satisfies PageServerLoad;
