import type { PageServerLoad } from './$types';

export const csr = true;

export const load = (() => {
	return {
		projects: [
			{
				name: 'Door to Dough',
				description: 'This is some information about door to dough',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS']
			},
			{
				name: 'Ward 11',
				description: 'This is some information about ward',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS']
			},
			{
				name: 'Buonappe',
				description: 'This is some information about buonappe',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS']
			},
			{
				name: 'Milysto',
				description: 'This is some information about milysto',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS']
			},
			{
				name: 'Roop',
				description: 'This is some information about roop',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS']
			}
		],
		tools: [
			{
				name: 'Kotlin',
				image: 'kotlin.svg'
			},
			{
				name: 'Swift',
				image: 'swift.svg'
			},
			{
				name: 'Python',
				image: 'python.svg'
			},
			{
				name: 'Typescript',
				image: 'typescript.svg'
			},
			{
				name: 'Android',
				image: 'android.svg'
			},
			{
				name: 'iOS',
				image: 'apple.svg'
			},
			{
				name: 'Svelte Kit',
				image: 'svelte.svg'
			},
			{
				name: 'Fast API',
				image: 'fastapi.svg'
			},
			{
				name: 'Android Studio',
				image: 'android-studio.svg'
			},
			{
				name: 'PyCharm',
				image: 'pycharm.svg'
			},
			{
				name: 'Docker',
				image: 'docker.svg'
			},
			{
				name: 'Nginx',
				image: 'nginx.svg'
			}
		]
	};
}) satisfies PageServerLoad;
