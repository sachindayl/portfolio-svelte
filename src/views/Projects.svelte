<script lang="ts">
	import ProjectCard from '../components/ProjectCard.svelte';
	import type { ProjectI } from '../models/ProjectI';

	export let projects: [ProjectI];
</script>

<div class="flex justify-center items-center flex-col w-full">
<div class=" items-center  space-y-8 md:w-2/3 py-16">
	{#each projects as project, i}
		<ProjectCard {project} isReverse={i % 2} />
	{/each}
</div>
</div>

