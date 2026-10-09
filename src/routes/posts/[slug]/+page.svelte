<script>
	let { data } = $props();
</script>

<article>
	<header>
		<h1>{data.metadata?.title || 'Untitled'}</h1>
		{#if data.metadata?.date}
			<time datetime={new Date(data.metadata.date).toISOString()}>
				{new Date(data.metadata.date).toLocaleDateString()}
			</time>
		{/if}
	</header>

	<!-- mdsvex renders the markdown as a Svelte component here -->
	<svelte:component this={data.content} />
</article>

<style>

</style>
