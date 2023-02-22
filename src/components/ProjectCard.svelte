<script lang="ts">
	import phone from '$lib/assets/images/22-removebg-preview.png';
	import type { ProjectI } from '../models/ProjectI';
	export let project: ProjectI;
	export let isReverse: boolean;
</script>

<div class="flex flex-col md:flex-row  items-center">
	{#if isReverse}
		<div class="flex-1 flex flex-col">
			<div class="text-4xl md:text-5xl">{project.name}</div>
			<div class="text-lg pt-4 pb-2 font-light text-left">
				{project.description}
			</div>
			<div class="font-light text-sm">
				Built with:
				{#each project.tools as tool, i}
					<span class="font-semibold text-teal-700">
						{tool}{i !== project.tools.length - 1 ? ',' : ''}
					</span>
				{/each}
			</div>
		</div>
	{/if}
	<div class="flex-1 w-full flex justify-center {isReverse ? 'md:justify-end' : 'md:justify-start'}">
		<div class="rounded-2xl bg-teal-600 w-64 h-64 md:w-96 md:h-96 p-4">
			<img class="object-contain w-full h-full" src={phone} alt="phone" />
		</div>
	</div>
	{#if !isReverse}
		<div class="flex-1 flex flex-col items-center md:items-end pt-8 md:pt-0 px-4 md:px-0">
			<div class="text-3xl md:text-5xl">{project.name}</div>
			<div class="text-lg pt-4 pb-2 font-light text-center md:text-right">
				{project.description}
			</div>
			<div class="font-light text-sm text-center md:text-right">
				Built with:
				{#each project.tools as tool, i}
					<span class="font-semibold text-teal-700">
						{tool}{i !== project.tools.length - 1 ? ',' : ''}
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>
