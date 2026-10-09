import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Import the markdown file - mdsvex will parse it
		const post = await import(`/content/posts/${params.slug}.md`);

		return {
			metadata: post.metadata,
			content: post.default
		};
	} catch (err) {
		throw error(404, `Post "${params.slug}" not found`);
	}
}
