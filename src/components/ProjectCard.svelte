<script lang="ts">
	import phone from '$lib/assets/images/22-removebg-preview.png';
	import type { ProjectI } from '../models/ProjectI';
	export let project: ProjectI;
	export let isReverse: boolean;
</script>

<div class="flex  items-center px-16">
	{#if isReverse}
		<div class="flex-1 flex flex-col">
			<div class="text-5xl">{project.name}</div>
			<div class="text-xl py-8 font-light">
				{project.description}
			</div>
			<div class="font-light">
				Built with:
				{#each project.tools as tool}
					<span class="font-semibold">
						{tool}
					</span>
				{/each}
			</div>
		</div>
	{/if}
	<div class="flex-1 w-full flex {isReverse ? 'justify-end' : 'justify-start'}">
		<div class="rounded-2xl bg-teal-600 w-96 h-96 p-4">
			<img class="object-contain w-full h-full" src={phone} alt="phone" />
		</div>
	</div>
	{#if !isReverse}
		<div class="flex-1 flex flex-col items-end">
			<div class="text-5xl">{project.name}</div>
			<div class="text-xl py-8 font-light">
				{project.description}
			</div>
			<div class="font-light">
				Built with:
				{#each project.tools as tool}
					<span class="font-semibold">
						{tool}
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>
