<script lang="ts">
	import phone from '$lib/assets/images/22-removebg-preview.png';
	import type { ProjectI } from '../models/ProjectI';
	import {browser} from "$app/environment";

	export let project: ProjectI;
	export let isReverse: boolean;
	export let isMobile: boolean;
</script>

<div class="flex flex-col md:flex-row justify-center  items-center w-full">
	<div class="order-2 {isReverse ? 'md:order-first' : 'md:order-last' } flex-1 flex flex-col p-4 md:px-0 {isReverse? 'md:pr-16': 'md:pl-16'}">
			<div class="text-3xl md:text-5xl text-center {isReverse? 'md:text-start': 'md:text-end'}">{project.name}</div>
			<div class="text-lg pt-4 pb-2 font-light text-center {isReverse? 'md:text-start': 'md:text-end'} }text-left">
				{project.description}
			</div>
			<div class="font-light text-sm text-center {isReverse? 'md:text-start': 'md:text-end'}">
				Built with:
				{#each project.tools as tool, i}
					<span class="font-semibold text-teal-700">
						{tool}{i !== project.tools.length - 1 ? ',' : ''}
					</span>
				{/each}
			</div>
		</div>
	<div
		class="flex-1 w-full flex justify-center {isReverse ? 'md:justify-end' : 'md:justify-start'}"
	>
		<div class="rounded-2xl bg-teal-600 w-64 h-64 md:w-96 md:h-96 p-4">
			<img class="object-contain w-full h-full" src={phone} alt="phone" />
		</div>
	</div>


	<!--{#if isReverse && !isMobile}-->
	<!--	-->
	<!--{/if}-->
	<!--<div-->
	<!--	class="flex-1 w-full flex justify-center {isReverse ? 'md:justify-end' : 'md:justify-start'}"-->
	<!--&gt;-->
	<!--	<div class="rounded-2xl bg-teal-600 w-64 h-64 md:w-96 md:h-96 p-4">-->
	<!--		<img class="object-contain w-full h-full" src={phone} alt="phone" />-->
	<!--	</div>-->
	<!--</div>-->
	<!--{#if !isReverse}-->
	<!--	<div class="flex-1 flex flex-col items-center md:items-end pt-8 md:pt-0 px-4 md:px-0">-->
	<!--		<div class="text-3xl md:text-5xl">{project.name}</div>-->
	<!--		<div class="text-lg pt-4 pb-2 font-light text-center md:text-right">-->
	<!--			{project.description}-->
	<!--		</div>-->
	<!--		<div class="font-light text-sm text-center md:text-right">-->
	<!--			Built with:-->
	<!--			{#each project.tools as tool, i}-->
	<!--				<span class="font-semibold text-teal-700">-->
	<!--					{tool}{i !== project.tools.length - 1 ? ',' : ''}-->
	<!--				</span>-->
	<!--			{/each}-->
	<!--		</div>-->
	<!--	</div>-->
	<!--{/if}-->
</div>
