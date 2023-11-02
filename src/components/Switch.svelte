<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Define the theme options and the storage key
	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};
	const STORAGE_KEY = 'theme';

	// Create a writable store to hold the current theme
	export const theme = writable(THEMES.LIGHT);

  let isInitialModeDark = false;

	// A function to apply the theme to the document body
	const applyTheme = (theme: string) => {
		document.body.classList.remove(THEMES.DARK, THEMES.LIGHT);
		if (theme === THEMES.DARK) {
			document.body.classList.add(THEMES.DARK);
		} else if (theme === THEMES.LIGHT) {
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	// A function to toggle the theme and save it to localStorage
	const toggleTheme = () => {
		let currentTheme = $theme;
		let newTheme;
		if (currentTheme === THEMES.DARK) {
			newTheme = THEMES.LIGHT;
		} else {
			newTheme = THEMES.DARK;
		}
		theme.set(newTheme);
		localStorage.setItem(STORAGE_KEY, newTheme);
		applyTheme(newTheme);
	};

	// A function to get the theme from localStorage or system preference
	$: getTheme = () => {
		let storedTheme = localStorage.getItem(STORAGE_KEY);
		if (storedTheme) {
			return storedTheme;
		}
		let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return prefersDark ? THEMES.DARK : THEMES.LIGHT;
	};

	// Run the functions on mount and on system preference change
	onMount(() => {
		let initialTheme = getTheme();
    isInitialModeDark = initialTheme === THEMES.DARK;
		theme.set(initialTheme);
		applyTheme(initialTheme);
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			let updatedTheme = getTheme();
			theme.set(updatedTheme);
			applyTheme(updatedTheme);
		});
	});
</script>

<!-- A simple checkbox to toggle the theme -->
<label class="relative inline-flex items-center cursor-pointer mr-8">
	<input on:click={toggleTheme} type="checkbox" bind:checked={isInitialModeDark} class="sr-only peer" />
	<div
		class="w-11 h-6 peer bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
	/>
</label>
