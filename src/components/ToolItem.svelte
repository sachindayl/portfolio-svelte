<script lang="ts">
	export let imageName: string;
	export let toolName: string;
</script>

<div class="flex flex-col items-center w-12 md:w-14 lg:w-20">
	<img
		class="object-contain w-10 h-10 md:w-12 md:h-12 lg:h-20 lg:w-20  pb-2"
		src="/assets/images/{imageName}"
		alt={toolName}
	/>
	<div class="text-sm lg:text-xl font-light text-white text-center">{toolName}</div>
</div>
