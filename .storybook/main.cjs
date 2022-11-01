module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	addons: [
		{
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					// When you have splitted your css over multiple files
					// and use @import('./other-styles.css')
					importLoaders: 1
				},
				postcssLoaderOptions: {
					// When using postCSS 8
					implementation: require('postcss')
				}
			}
		}
	],
	staticDirs: ['../static'],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},
	features: {
		storyStoreV7: true
	}
}
