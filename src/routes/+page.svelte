<script lang="ts">
	import Hero from '../views/Hero.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Projects from '../views/Projects.svelte';
	import type { PageServerData } from '../../.svelte-kit/types/src/routes/$types';
	import Tools from '../views/Tools.svelte';
	import Resume from '../views/Resume.svelte';
	import type { ExperienceI } from '../models/ExperienceI';
	import AOS from 'aos';
	import { browser } from "$app/environment";
	import type { ProjectI } from "../models/ProjectI";
	import type { ToolI } from "../models/ToolI";

	if (browser) {
		AOS.init();
	}

	export let data: PageServerData;
	let projects = data.projects as [ProjectI]
	let tools = data.tools as [ToolI]
	let experienceData = data.resume as [ExperienceI];
</script>

<svelte:head>
	<title>Sachinda Liyanaarachchi - Portfolio</title>
	<meta
		name="description"
		content="Crafting Digital Solutions for Mobile and Web: Explore the Portfolio of a Skilled Developer based in Toronto. I work on iOS, Android and Flutter projects."
	/>
</svelte:head>
<div class="h-screen bg-white dark:bg-teal-950">
	<NavBar />
	<Hero />
	<Projects projects={projects} />
	<Tools toolsList={tools} />
	<Resume resumeItemsList={experienceData} />
</div>
