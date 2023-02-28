<script lang="ts">
	import ToolItem from '../components/ToolItem.svelte';
	import type { ToolI } from '../models/ToolI.js';
	import { scrollRef } from 'svelte-scrolling';

	export let toolsList: [ToolI];
</script>

<div use:scrollRef={'tools'} class="md:h-3/5 bg-teal-800 w-full">
	<div class="flex flex-col md:flex-row justify-between h-full w-full lg:p-16">
		<div class="flex flex-col lg:flex-row justify-center items-center">
			<div
				 data-aos="fade-right" class="flex-1 flex flex-col justify-center items-center lg:items-start p-4"
			>
				<div class="text-3xl md:text-4xl text-white py-8 text-center lg:text-start font-semibold">
					Tools and Languages
				</div>
				<div class="text-lg md:text-xl text-white text-center lg:text-start">
					As a developer with knowledge in multiple platforms, I am familiar with many languages and
					tools
				</div>
			</div>
			<div data-aos="fade-left" class="flex-1 flex justify-center grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-2 md:gap-4 lg:gap-8 px-4 md:px-0 py-8">
				{#each toolsList as toolItem}
					<ToolItem toolName={toolItem.name} imageName={toolItem.image} />
				{/each}
			</div>
		</div>
	</div>
</div>
