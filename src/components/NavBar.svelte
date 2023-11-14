<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import Switch from "./Switch.svelte";
</script>

<div class="fixed flex h-20 items-center invisible md:visible bg-white dark:bg-black w-full shadow-lg z-50">
	<a use:scrollTo={{ ref: 'hero', offset: -100 }} href="/#" class="text-3xl grow pl-16 text-black dark:text-white">sachinda.liyanaarachchi</a>
<!--	<a href="/packages" class="px-4 text-black dark:text-white">Packages</a>-->
	<a use:scrollTo={{ ref: 'projects', offset: -100 }} href="/#" class="px-4 text-black dark:text-white">Projects</a>
	<a use:scrollTo={{ ref: 'tools', offset: -100 }} href="/#" class="px-4 text-black dark:text-white">Tools</a>
	<a use:scrollTo={{ ref: 'resume', offset: -100 }} href="/#" class="pl-4 pr-16 text-black dark:text-white">Resume</a>
	<Switch></Switch>
</div>
