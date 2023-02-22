import type { PageServerLoad } from './$types';
import fs from 'fs';

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
		],
		resume: [
			{
				position: 'Co-Founder / Lead Software Developer',
				workplace: 'Technomate Software - Colombo, Sri Lanka',
				tasks: [
					'Delivered 8 mobile (hybrid/native) and web projects which includes multiple applications',
					'Helped to build brands that includes logo designing and theming',
					'Gathered requirements to design product architectures and structures',
					'Published applications on App Store and Play Store for clients',
					'Implemented Material and Apple design patterns in various applications',
					'Added Firebase authentication (social/email) which secures the backend with access tokens for multiple roles',
					'Implemented MVVM and provider pattern in Kotlin and Dart',
					'Managed projects using Notion and code version control using Github'
				],
				timePeriod: 'JUNE 2020 - DECEMBER 2022'
			},
			{
				position: 'Lead Software Engineer',
				workplace: 'Digital Yogin S.R.L. - Padova, Italy',
				tasks: [
					'Overlooked, maintained and developed on multiple mobile and backend projects based on Flutter/Dart and FastAPI/Python',
					'Participated in architectural and wireframe design decision making',
					'Developed REST API services to retrieve data in JSON',
					'Implemented separate design patterns for iOS and Android using Material and Cupertino widgets',
					'Created database schemas and managed databases in Postgres',
					'Deployed projects on Docker containers with Nginx reverse proxying'
				],
				timePeriod: 'JUNE 2021 - OCTOBER 2022'
			},
			{
				position: 'Android Developer',
				workplace: 'Delta Airlines - Atlanta, Georgia, USA',
				tasks: [
					'Worked on the FlyDelta Android app that has millions of users',
					'Part of the ticket checkout team that added ticket extras',
					'Implemented reactive networking calls using RxJava to retrieve json data',
					'Designed UI for multiple screen sizes in XML according to specifications',
					'Participated in Agile methodologies',
					'Code testing using Mockito and Espresso'
				],
				timePeriod: 'JUNE 2019 - NOVEMBER 2019'
			},
			{
				position: 'Android Developer',
				workplace: 'Omnitracs LLC - Towson, Maryland, USA',
				tasks: [
					'Involved in data transferring from package delivery trucks',
					'Initiated a project to deliver data using RxJava data streams',
					'Retrieved data from proprietary devices using bluetooth'
				],
				timePeriod: 'OCTOBER 2018 - MARCH 2019'
			}
		]
	};
}) satisfies PageServerLoad;

async function downloadResume(fileName: string) {
	console.log('download clicked');
	const pdf = await fs.readFileSync('./src/lib/assets/files/' + fileName + '.pdf');

	return {
		status: 200,
		headers: {
			'Content-type': 'application/octet-stream',
			'Content-Disposition': 'attachment; filename=' + fileName + '.pdf'
		},
		body: pdf
	};
}
