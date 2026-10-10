<script>
	let { data } = $props();
	console.log(data.body)
</script>

<article>
	<header>
		<h1>{data.title || 'Untitled'}</h1>
		<!-- {#if data.post.data.post.date}
			<time datetime={new Date(data.metadata.date).toISOString()}>
				{new Date(data.metadata.date).toLocaleDateString()}
			</time>
		{/if} -->
	</header>

	<!-- mdsvex renders the markdown as a Svelte component here -->
	{data.body}
</article>

<style>

</style>
