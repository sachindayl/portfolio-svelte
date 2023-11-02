<script lang="ts">
	import myImage from '$lib/assets/images/me.png?h=360&w=720&webp';
	import { scrollRef } from 'svelte-scrolling';
	import { browser } from '$app/environment';

	const STORAGE_KEY = 'theme';
	const THEMES = {
		LIGHT: 'light',
		DARK: 'dark'
	};

	$: storageTheme = localStorage.getItem(STORAGE_KEY)

	$: getTheme = () => {
		if (browser) {
			let storedTheme = storageTheme ?? THEMES.LIGHT;
			if (storedTheme) {
				return storedTheme;
			}
			let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			return prefersDark ? THEMES.DARK : THEMES.LIGHT;
		} else {
			return THEMES.LIGHT;
		}
	}

	// $: theme =
	// 	browser && getThe;
	//
	// $: blob = getTheme() === THEMES.DARK ? 'assets/images/blob-dark.svg' : 'assets/images/blob.svg';
	$: isDarkTheme = getTheme() === THEMES.DARK;
	console.log(isDarkTheme);
</script>

<div
	class="md:h-5/6 px-0 md:px-8 bg-gradient-to-r dark:bg-gradient-to-b from-white to-teal-200 dark:from-black dark:to-teal-950"
>
	<div
		use:scrollRef={'hero'}
		class="container mx-auto flex flex-col lg:flex-row items-center px-0 md:px-16 md:h-full w-full"
	>
		<div
			class="animate__animated animate__fadeInLeft flex-1 flex-col text-center lg:text-start p-8 md:pt-24 md:pb-16 lg:p-0 w-full"
		>
			<div class="text-5xl lg:text-7xl text-black dark:text-white">
				Making the impossible possible with <span class="font-bold">Sachi:</span>
			</div>
			<div class="text-2xl md:text-4xl pt-4 font-light text-black dark:text-white">
				Mobile and web development at its finest.
			</div>
			<div class="flex flex-row justify-center lg:justify-start space-x-2 py-4 md:py-8">
				<div
					class="text-small bg-teal-500 dark:bg-teal-800 text-black dark:text-white p-0.5 px-4 rounded-full font-semibold"
				>
					sachinda.yl@gmail.com
				</div>
				<a href="https://www.github.com/sachindayl" target="_blank" rel="noreferrer">
					<img
						class="object-contain w-8 h-8 bg-teal-500 dark:bg-teal-800 rounded-full p-0.5"
						src="assets/images/github.svg"
						alt="github"
					/>
				</a>
				<a href="https://www.linkedin.com/in/sachindayl" target="_blank" rel="noreferrer">
					<img
						class="object-contain w-8 h-8 bg-teal-500 dark:bg-teal-800 rounded-full p-0.5"
						src="assets/images/linkedin.svg"
						alt="linkedin"
					/>
				</a>
			</div>
		</div>
		<div class="animate__animated animate__zoomIn flex-1 relative w-full p-16 md:p-8">
			{#if isDarkTheme}
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#134e4a"
						d="M32.5,-39.7C41.7,-31,48.4,-20.4,49.7,-9.3C51,1.7,46.8,13.1,40.4,22.6C34.1,32,25.5,39.4,13.1,49.9C0.7,60.5,-15.7,74.2,-31.8,74.1C-47.9,74,-63.8,60,-71.7,43C-79.7,26,-79.7,6,-76.2,-13.3C-72.7,-32.6,-65.6,-51.2,-52.3,-59.2C-39,-67.2,-19.5,-64.5,-3.9,-59.8C11.6,-55.1,23.3,-48.3,32.5,-39.7Z"
						transform="translate(100 100)"
					/>
				</svg>
			{/if}

			{#if !isDarkTheme}
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#08BDBA"
						d="M32.5,-39.7C41.7,-31,48.4,-20.4,49.7,-9.3C51,1.7,46.8,13.1,40.4,22.6C34.1,32,25.5,39.4,13.1,49.9C0.7,60.5,-15.7,74.2,-31.8,74.1C-47.9,74,-63.8,60,-71.7,43C-79.7,26,-79.7,6,-76.2,-13.3C-72.7,-32.6,-65.6,-51.2,-52.3,-59.2C-39,-67.2,-19.5,-64.5,-3.9,-59.8C11.6,-55.1,23.3,-48.3,32.5,-39.7Z"
						transform="translate(100 100)"
					/>
				</svg>
			{/if}

			<img
				src={myImage}
				class="w-40 md:w-2/5 rounded-b-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grayscale"
				alt="myself"
			/>
		</div>
		<div
			class="animate__animated animate__fadeInRight flex flex-col md:flex-row lg:flex-col justify-center w-20 mt-20 mb-8 lg:mb-0 lg:mt-0 items-center lg:items-end"
		>
			<div class="px-4">
				<div
					class="text-2xl lg:text-4xl text-center lg:text-end font-semibold text-black dark:text-white"
				>
					6+
				</div>
				<div
					class="text-xl lg:text-2xl text-center lg:text-end font-light italic text-black dark:text-white"
				>
					Years of experience
				</div>
			</div>
			<div class="px-4">
				<div
					class="text-2xl lg:text-4xl text-center lg:text-end pt-8 md:pt-0 lg:pt-16 font-semibold text-black dark:text-white"
				>
					20+
				</div>
				<div
					class="text-xl lg:text-2xl text-center lg:text-end font-light italic text-black dark:text-white"
				>
					Projects done
				</div>
			</div>
		</div>
	</div>
</div>
