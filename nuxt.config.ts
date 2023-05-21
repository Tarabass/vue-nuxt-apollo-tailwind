export default defineNuxtConfig({
	modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],

	apollo: {
		clients: {
			default: {
				httpEndpoint: 'https://rickandmortyapi.com/graphql',
			},
		},
	},
})
