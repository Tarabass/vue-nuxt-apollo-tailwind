<template>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center"
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

type CharacterResults = {
	characters: {
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
	query getCharacters {
		# info {
		# 	count
		# 	pages
		# 	next
		# 	prev
		# }
		characters {
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

const { data } = await useAsyncQuery<CharacterResults>(query)
</script>
