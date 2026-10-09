<script lang="ts">

</script>

<svelte:head>
	<title>Svelte+TinaCMS</title>
	<meta name="description" content="Svelte + TinaCMS" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<enhanced:img class="welcome-image" src="#lib/images/svelte-welcome.png" alt="Welcome" />
		</span>

		To the Sveltekit3 and TinaCMS Test
	</h1>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome-image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
