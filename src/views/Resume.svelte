<script lang="ts">
	import ResumeItem from '../components/ResumeItem.svelte';
	import { fade } from 'svelte/transition';
	import type { ExperienceI } from '../models/ExperienceI';
	import { scrollRef } from 'svelte-scrolling'

	let showCount = 2;
	export let resumeItemsList: [ExperienceI];
	let isVisible = true;

	function onReadMorePress() {
		isVisible = false;
		showCount = showCount + 2;
		setTimeout(() => {
			isVisible = true;
		}, 100);
	}
</script>

<div use:scrollRef={'resume'} class="container mx-auto w-full p-3 md:p-16">
	<div class="flex justify-center w-full pb-1 pt-4 md:pt-0 text-4xl md:text-5xl font-semibold">Resume</div>
	<div class="flex justify-center w-full pb-8 text-sm md:text-lg font-extralight italic">Updated in 02/2023</div>
	{#key showCount}
		{#if isVisible}
			<div
				class="p-4 md:p-16 rounded-2xl border border-teal-600 shadow-lg shadow-teal-600"
				transition:fade={{ duration: 400 }}
			>
				<ol class="flex flex-col justify-center border-l-2 border-teal dark:border-teal-600 ">
					{#each resumeItemsList as item, i (item)}
						{#if i < showCount}
							<li>
								<ResumeItem experienceItem={item} />
							</li>
						{/if}
					{/each}
				</ol>
				{#if showCount < resumeItemsList.length}
					<div class="flex justify-center pb-4 pt-4 md:pt-16">
						<button
							type="button"
							class="inline-block rounded bg-teal-600 px-4 pt-[6px] pb-[5px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
							data-te-ripple-init
							data-te-ripple-color="light"
							on:click={() => onReadMorePress()}
						>
							Read more
						</button>
					</div>
				{/if}
			</div>
		{/if}
	{/key}
	<!--	<div class="flex justify-center pt-16">-->
	<!--		<button-->
	<!--			type="button"-->
	<!--			class="border border-teal-600 inline-block rounded bg-white text-teal-600 px-4 pt-[6px] pb-[5px] text-xs font-medium-->
	<!--			uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out-->
	<!--			hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]-->
	<!--			focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]-->
	<!--			focus:outline-none focus:ring-0 active:bg-primary-700-->
	<!--			active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"-->
	<!--			data-te-ripple-init-->
	<!--			data-te-ripple-color="light"-->
	<!--			on:click={async () => await data.streamed.downloadResume}-->
	<!--		>-->
	<!--			Download Resume-->
	<!--		</button>-->
	<!--	</div>-->
</div>
