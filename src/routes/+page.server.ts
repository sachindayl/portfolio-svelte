import type { PageServerLoad } from './$types';
import fs from 'fs';

export const csr = true;

export const load = (() => {
	return {
		projects: [
			{
				name: 'Buonappe',
				description:
					'Buonappe is a multi-user app built with Flutter designed for restaurants. It streamlines operations by allowing cooks, managers, and drivers to collaborate in real-time, improving efficiency and productivity.',
				tools: ['Flutter', 'FastAPI', 'Firebase Authentication', 'Docker', 'NGINX'],
				image: "buonappe.png"
			},
			{
				name: 'Milysto',
				description:
					'Milysto is a powerful app designed for Italian shops and stalls. Built with Flutter, it features multi-user functionality for shop owners, keepers, and admins, making it easy to manage sales, inventory, and more.',
				tools: ['Flutter', 'FastAPI', 'Firebase Authentication', 'Docker', 'NGINX'],
				image: "milysto.png"
			},
			{
				name: 'Roop',
				description:
					'Roop is a comprehensive event management app built with Flutter for both mobile and web. It helps streamline event planning by managing scheduling, budgeting, vendors, and tasks, making it easy to organize and execute successful events.',
				tools: ['Flutter', 'FastAPI', 'Firebase Authentication', 'Docker', 'NGINX'],
				image: "roop.png"
			},
			{
				name: 'Door to Dough',
				description:
					'Door to Dough is an easy-to-use recipe app built using Swiftui, Flutter, and Firebase authentication. Discover a variety of Sri Lankan and international recipes and step up your cooking game!',
				tools: ['SwiftUI', 'Kotlin Multiplatform', 'Flutter', 'NodeJS'],
				image: "doortodough.png"
			},
			{
				name: 'Ward 11',
				description:
					"Ward 11 is the ideal hybrid (iOS, Android) app for hospital wards looking to streamline their patient data entry and management processes. Whether you're a doctor, or a hospital staff member, this app will help you provide better care by providing up-to-date patient information.",
				tools: ['Flutter', 'Firebase Authentication', 'Firebase NoSQL DB'],
				image: "ward.png"
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
