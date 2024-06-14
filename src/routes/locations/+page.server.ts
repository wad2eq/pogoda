import type { PageServerData } from '../$types';

export const load: Promise<PageServerData> = async ({ url }) => {
	console.log(url.searchParams.get('wad'));

	return {
		location: url.searchParams.get('location')
	};
};
