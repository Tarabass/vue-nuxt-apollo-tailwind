export default defineNuxtConfig({
	modules: ['@nuxtjs/apollo'],

	apollo: {
		clients: {
			default: {
				httpEndpoint: 'https://rickandmortyapi.com/graphql',
			},
		},
	},
})
