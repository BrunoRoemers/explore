import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// TODO make dynamic
			base: '/explore'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
