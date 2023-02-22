<script lang="ts">
	import ToolItem from '../components/ToolItem.svelte';
	import type {ToolI} from '../models/ToolI.js';
	import {scrollRef} from 'svelte-scrolling'

	export let toolsList: [ToolI];
</script>

<div use:scrollRef={'tools'} class="h-3/5 bg-teal-800 px-32">
	<div class="flex justify-between h-full">
		<div class="flex justify-center items-center w-full">
			<div class="flex-1 flex flex-col justify-start items-start p-4">
				<div class="text-4xl text-white pb-8">Tools and Languages</div>
				<div class="text-xl text-white">
					As a developer with knowledge in multiple platforms, I am familiar with many languages and
					tools
				</div>
			</div>
			<div class="flex-1 grid grid-rows-3 grid-flow-col gap-8 justify-end p-4">
				{#each toolsList as toolItem}
					<ToolItem toolName={toolItem.name} imageName={toolItem.image} />
				{/each}
			</div>
		</div>
	</div>
</div>
