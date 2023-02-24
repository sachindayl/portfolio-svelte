<script lang="ts">
	export let imageName: string;
	export let toolName: string;
</script>

<div class="flex flex-col items-center w-16 md:w-20">
	<img
		class="object-contain w-14 h-14 md:w-20 md:h-20 pb-2"
		src="/assets/images/{imageName}"
		alt={toolName}
	/>
	<div class="text-sm md:text-xl font-light text-white text-center">{toolName}</div>
</div>
