<script lang="ts">
	import ToolItem from '../components/ToolItem.svelte';
	import type { ToolI } from '../models/ToolI.js';
	import { scrollRef } from 'svelte-scrolling';

	export let toolsList: [ToolI];
</script>

<div use:scrollRef={'tools'} class="md:h-3/5 bg-teal-800">
	<div class="container mx-auto flex flex-col md:flex-row justify-between h-full">
		<div class="flex flex-col md:flex-row justify-center items-center w-full">
			<div
				class="flex-1 flex flex-col justify-center md:justify-start items-center md:items-start p-0 md:p-4"
			>
				<div class="text-3xl md:text-4xl text-white py-8 w-full text-center md:text-start font-semibold">
					Tools and Languages
				</div>
				<div class="text-lg md:text-2xl text-white text-center md:text-start">
					As a developer with knowledge in multiple platforms, I am familiar with many languages and
					tools
				</div>
			</div>
			<div class="flex-1 grid grid-rows-4 md:grid-rows-3 grid-flow-col gap-8 justify-end p-4">
				{#each toolsList as toolItem}
					<ToolItem toolName={toolItem.name} imageName={toolItem.image} />
				{/each}
			</div>
		</div>
	</div>
</div>
