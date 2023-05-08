<script>
	import myImage from '$lib/assets/images/me.png?h=360&w=720&webp';
	import { scrollRef } from 'svelte-scrolling';
</script>

<div class="md:h-5/6 px-0 md:px-8 bg-gradient-to-l from-teal-200">
	<div
		use:scrollRef={'hero'}
		class="container mx-auto flex flex-col lg:flex-row items-center px-0 md:px-16 md:h-full w-full"
	>
		<div
			class="animate__animated animate__fadeInLeft flex-1 flex-col text-center lg:text-start p-8 md:pt-24 md:pb-16 lg:p-0 w-full"
		>
			<div class="text-5xl lg:text-7xl">
				Making the impossible possible with <span class="font-bold">Sachi:</span>
			</div>
			<div class="text-2xl md:text-4xl pt-4 font-light">
				Mobile and web development at its finest.
			</div>
			<div class="flex flex-row justify-center lg:justify-start space-x-2 py-4 md:py-8">
				<div class="text-small bg-teal-500 p-0.5 px-4 rounded-full font-semibold">sachinda.yl@gmail.com</div>
				<a href="https://www.github.com/sachindayl" target="_blank" rel="noreferrer">
					<img
						class="object-contain w-8 h-8 bg-teal-500 rounded-full p-0.5"
						src="assets/images/github.svg"
						alt="github"
					/>
				</a>
				<a href="https://www.linkedin.com/in/sachindayl" target="_blank" rel="noreferrer">
					<img
						class="object-contain w-8 h-8 bg-teal-500 rounded-full p-0.5"
						src="assets/images/linkedin.svg"
						alt="linkedin"
					/>
				</a>
			</div>
		</div>
		<div class="animate__animated animate__zoomIn flex-1 relative w-full p-16 md:p-8">
			<img
				src="assets/images/blob.svg"
				class="w-64 md:w-5/6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
				alt="blob"
			/>
			<img
				src={myImage}
				class="w-40 md:w-2/5 rounded-b-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grayscale"
				alt="myself"
			/>
		</div>
		<div
			class="animate__animated animate__fadeInRight flex flex-col md:flex-row lg:flex-col justify-center w-20 mt-20 mb-8 lg:mb-0 lg:mt-0 items-center lg:items-end"
		>
			<div class="px-4">
				<div class="text-2xl lg:text-4xl text-center lg:text-end font-semibold">6+</div>
				<div class="text-xl lg:text-2xl text-center lg:text-end font-light italic">
					Years of experience
				</div>
			</div>
			<div class="px-4">
				<div
					class="text-2xl lg:text-4xl text-center lg:text-end pt-8 md:pt-0 lg:pt-16 font-semibold"
				>
					20+
				</div>
				<div class="text-xl lg:text-2xl text-center lg:text-end font-light italic">Projects done</div>
			</div>
		</div>
	</div>
</div>
