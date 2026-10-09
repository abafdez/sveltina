import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/admin') {
		throw redirect(307, '/admin/index.html');
	}

	return resolve(event);
};
