<script lang="ts">
	import NavBarOther from '../../components/NavBarOther.svelte';
	import type { PageServerData } from '../../../.svelte-kit/types/src/routes/packages/$types';
	import type { PackageI } from '../../models/PackageI';
	import PackageCard from '../../components/PackageCard.svelte';

	export let data: PageServerData;
	let packages = data.packages as [PackageI];
</script>

<NavBarOther />
<section class="lg:pt-16 bg-white dark:bg-teal-950 text-gray-600 body-font overflow-hidden my-auto">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">Packages</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-white">
				The package pricing reflects the value I bring to your projects. With transparent and competitive rates,
				I offer tailored packages to ensure you receive high-quality services that meet your
				specific requirements, fostering a collaborative partnership for successful outcomes.
			</p>
			<div class="flex mx-auto border-2 border-teal-500 rounded overflow-hidden mt-6">
				<button class="py-1 px-4 bg-teal-500 text-white focus:outline-none">One Time</button>
				<button class="py-1 px-4 focus:outline-none text-gray-500">Monthly</button>
			</div>
		</div>
		<div class="flex flex-wrap -m-4 mx-auto justify-center">
			{#each packages as packageItem}
				<PackageCard {packageItem} />
			{/each}
		</div>
	</div>
</section>
