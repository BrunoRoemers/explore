import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { PUBLIC_URL_PREFIX } from '$env/static/public';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: PUBLIC_URL_PREFIX ?? ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
