<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
</script>

<div class="fixed flex h-20 items-center invisible md:visible bg-white w-full shadow-lg z-50">
	<a use:scrollTo={{ ref: 'hero', offset: -100 }} href="/#" class="text-3xl grow pl-16">sachinda.liyanaarachchi</a>
	<a use:scrollTo={{ ref: 'projects', offset: -100 }} href="/#" class="px-4">Projects</a>
	<a use:scrollTo={{ ref: 'tools', offset: -100 }} href="/#" class="px-4">Tools</a>
	<a use:scrollTo={{ ref: 'resume', offset: -100 }} href="/#" class="pl-4 pr-16">Resume</a>
</div>
