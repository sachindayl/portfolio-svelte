<script lang="ts">
	import type { ExperienceI } from '../models/ExperienceI';

	export let experienceItem: ExperienceI;
</script>

<div>
	<div class="flex-start flex items-center">
		<div
			class="-ml-[9px] mr-3 -mt-2 flex h-4 w-4 p-2 items-center justify-center rounded-full bg-teal dark:bg-teal-500"
		/>
		<h4 class="-mt-2 text-lg md:text-2xl font-semibold py-2 px-1 text-black dark:text-white">{experienceItem.position} <span class="pl-4 font-light text-sm md:text-lg opacity-70 text-black dark:text-white">{experienceItem.workplace}</span></h4>
	</div>
	<div class="ml-6 mb-2 pb-6">
		<a href="#!" class="text-sm text-black font-light transition duration-150 ease-in-out hover:text-teal-600 text-black dark:text-white"
			>{experienceItem.timePeriod}</a
		>
		<ul class="list-disc mt-2 text-black dark:text-white text-sm md:text-lg">
			{#each experienceItem.tasks as task}
				<li class="opacity-80">
					{task}
				</li>
			{/each}
		</ul>
	</div>
</div>
