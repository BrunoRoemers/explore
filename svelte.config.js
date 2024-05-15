import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
