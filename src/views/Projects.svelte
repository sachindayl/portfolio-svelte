<script lang="ts">
	import ProjectCard from '../components/ProjectCard.svelte';
	import { fade } from 'svelte/transition';
	import type { ProjectI } from '../models/ProjectI';
	import { scrollRef } from 'svelte-scrolling';

	export let projects: [ProjectI];
	let showCount = 2;
	let isVisible = true;

	function onReadMorePress() {
		// isVisible = false;
		showCount = showCount + 2;
		setTimeout(() => {
			isVisible = true;
		}, 100);
	}
</script>

<div   class="flex justify-center items-center flex-col">
	<div use:scrollRef={'projects'} class="flex justify-center w-full text-4xl md:text-5xl font-semibold pt-16">Projects</div>
	{#key showCount}
		{#if isVisible}
			<div data-aos="fade-up" class="flex flex-col items-center md:w-2/3 py-16" transition:fade={{ duration: 400 }}>
				{#each projects as project, i}
					{#if i < showCount}
						<ProjectCard {project} isReverse={ i % 2 === 0} />
					{/if}
				{/each}
			</div>
			{#if showCount < projects.length}
				<div class="flex justify-center pt-4 pb-8 md:py-16 w-full">
					<button
						type="button"
						class="inline-block rounded bg-teal-600 px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
						data-te-ripple-init
						data-te-ripple-color="light"
						on:click={() => onReadMorePress()}
					>
						View more
					</button>
				</div>
			{/if}
		{/if}{/key}
</div>
