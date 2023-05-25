export default defineNuxtConfig({
	app: {
		head: {
			title: 'Rick and Morty',
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

	apollo: {
		clients: {
			default: {
				httpEndpoint: 'https://rickandmortyapi.com/graphql',
			},
		},
	},

	tailwindcss: {},

	image: {
		domains: ['rickandmortyapi.com'],
	},

	routeRules: {
		'/': { redirect: '/characters' },
	},

	// build: {

	// 	extend(config) {
	// 		config.module.rules.push({
	// 			// test: /\.(ogg|mp3|wav|mpe?g)$/i,
	// 			// loader: 'file-loader',
	// 			// options: {
	// 			//   name: '[path][name].[ext]'
	// 			// }
	// 			test: /\.(graphql|gql)$/,
	// 			exclude: /node_modules/,
	// 			loader: 'graphql-tag/loader',
	// 		})
	// 	},
	// },
})
