<script lang="ts">
	import phone from '$lib/assets/images/22-removebg-preview.png';
	import type { ProjectI } from '../models/ProjectI';
	export let project: ProjectI;
	export let isReverse: boolean;
</script>

<div class="flex  items-center">
	{#if isReverse}
		<div class="flex-1 flex flex-col">
			<div class="text-5xl">{project.name}</div>
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
	<div class="flex-1 w-full flex {isReverse ? 'justify-end' : 'justify-start'}">
		<div class="rounded-2xl bg-teal-600 w-96 h-96 p-4">
			<img class="object-contain w-full h-full" src={phone} alt="phone" />
		</div>
	</div>
	{#if !isReverse}
		<div class="flex-1 flex flex-col items-end">
			<div class="text-5xl">{project.name}</div>
			<div class="text-lg pt-4 pb-2 font-light text-right">
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
</div>
