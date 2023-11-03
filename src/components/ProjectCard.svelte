<script lang="ts">
	import type { ProjectI } from '../models/ProjectI';

	export let project: ProjectI;
	export let isReverse: boolean;
</script>

<div class="flex flex-col md:flex-row justify-center  items-center">
	<div
		class="order-2 {isReverse
			? 'md:order-first'
			: 'md:order-last'} flex-1 flex flex-col p-4 md:px-0 {isReverse ? 'md:pr-16' : 'md:pl-16'}"
	>
		<div class="text-3xl md:text-5xl text-center text-black dark:text-white {isReverse ? 'md:text-start' : 'md:text-end'}">
			{project.name}
		</div>
		<div
			class="text-lg pt-4 pb-2 font-light text-center text-black dark:text-white {isReverse
				? 'md:text-start'
				: 'md:text-end'} text-left"
		>
			{project.description}
		</div>
		<div class="font-light text-sm text-center text-black dark:text-white {isReverse ? 'md:text-start' : 'md:text-end'}">
			Built with:
			{#each project.tools as tool, i}
				<span class="font-semibold text-teal-700 dark:text-teal-300">
					{tool}{i !== project.tools.length - 1 ? ',' : ''}
				</span>
			{/each}
		</div>
	</div>
	<div
		class="flex-1 w-full flex justify-center {isReverse
			? 'md:justify-end md:skew-y-3'
			: 'md:justify-start md:-skew-y-3'}"
	>
		<div class="rounded-2xl bg-teal-600 dark:bg-teal-900 w-2/3 h-1/4 md:w-3/4 md:h-3/4 p-4 shadow-2xl">
			<img
				class="object-fit mx-auto h-[300px]"
				src="assets/images/{project.image}"
				alt="phone"
			/>
		</div>
	</div>
</div>
