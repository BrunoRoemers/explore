import * as dataApi from '$lib/dataApi';

export async function load({ params, url }) {
	return {
		params,
		bundle: await dataApi.load(url.hostname),
		schema: await dataApi.loadSchema(url.hostname)
	};
}
