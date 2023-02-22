<script lang="ts">
	import Hero from '../views/Hero.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Projects from '../views/Projects.svelte';
	import type { PageServerData } from '../../.svelte-kit/types/src/routes/$types';
	import Tools from '../views/Tools.svelte';
	import Resume from '../views/Resume.svelte';
	import type {ExperienceI} from "../models/ExperienceI";

	export let data: PageServerData;
	let experienceData: [ExperienceI] = data.resume as [ExperienceI]
</script>

<div class="h-screen">
	<NavBar />
	<Hero />
	<Projects projects={data.projects} />
<!--	<Tools toolsList={data.tools} />-->
	<Resume resumeItemsList={experienceData}/>
</div>
