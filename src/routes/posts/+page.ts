export async function load() {
	const modules = import.meta.glob<{
		metadata: Record<string, unknown>;
		default: unknown;
	}>('/content/posts/*.md', { eager: true });

	const posts = Object.entries(modules).map(([filepath, module]) => {
		const slug = filepath
			.split('/')
			.pop()
			?.replace(/\.(md|svx)$/, '');

		return {
			slug,
			title: module.metadata?.title || 'Untitled',
			...module.metadata
		};
	});

	return { posts };
}
