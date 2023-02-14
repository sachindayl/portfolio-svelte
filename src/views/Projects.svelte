<script lang="ts">
	import ProjectCard from '../components/ProjectCard.svelte';
	import type { ProjectI } from '../models/ProjectI';

	export let projects: [ProjectI];
</script>

<div class="h-2/3 space-y-8">
	{#each projects as project, i}
		<ProjectCard {project} isReverse={i % 2} />
	{/each}
</div>
