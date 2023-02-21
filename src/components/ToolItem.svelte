<script lang="ts">
    export let imageName
    export let toolName
</script>

<div class="flex flex-col items-center">
    <img class="object-contain w-20 h-20 pb-2" src="/assets/images/{imageName}" alt={toolName}>
    <div class="text-xl font-light text-white text-center">{toolName}</div>
</div>
