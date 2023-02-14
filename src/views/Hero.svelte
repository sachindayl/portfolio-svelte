<script>
	import myImage from '$lib/assets/images/me.png?h=360&w=720&webp';
</script>

<div class="h-screen md:h-2/3">
	<div class="flex flex-col md:flex-row items-center px-16 h-full w-full">
		<div class="flex-1 flex-col text-center md:text-start p-16 md:p-0 w-full">
			<div class="text-7xl">
				Making the impossible possible with <span class="font-bold">Sachi:</span>
			</div>
			<div class="text-4xl pt-4 font-light">Mobile and web development at its finest.</div>
			<div class="flex flex-row space-x-2 py-8">
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
		<div class="flex-1 relative">
			<img
				src="assets/images/blob.svg"
				class="w-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				alt="blob"
			/>
			<img
				src={myImage}
				class="w-2/5 rounded-b-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grayscale"
				alt="myself"
			/>
		</div>
	</div>
</div>
