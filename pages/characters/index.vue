<template>
	<Pagination
		:pages="data.characters.info.pages"
		:previous="data.characters.info.prev"
		:next="data.characters.info.next"
	></Pagination>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center"
	>
		<CharacterCard
			v-for="{ id, name, image, status, species, location } in data
				.characters.results"
			:key="id"
			:id="id"
			:name="name"
			:image="image"
			:status="status"
			:species="species"
			:location="location.name"
		/>
	</div>
</template>

<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Characters` : 'Characters'
	},
})

const route = useRoute()
const currentPage = route.query.page ? +route.query.page : 1

type CharacterResults = {
	characters: {
		info: {
			count: number
			pages: number
			next: number
			prev: number
		}
		results: {
			id: string
			name: string
			image: string
			status: string
			species: string
			location: {
				name: string
			}
		}[]
	}
}

const query = gql`
	query getCharacters($page: Int!) {
		characters(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				name
				image
				status
				id
				species
				location {
					name
				}
			}
		}
	}
`

const variables = { page: currentPage }

const { data } = await useAsyncQuery<CharacterResults>(query, variables)
</script>
