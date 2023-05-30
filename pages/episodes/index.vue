<template>
	<div class="grid grid-cols-5 justify-items-center gap-4">
		<div
			v-for="{ id, name, air_date, episode, characters, created } in data
				.episodes.results"
			:key="id"
		>
			<p>{{ name }}</p>
			<p>{{ air_date }}</p>
			<p>{{ episode }}</p>
			<p>{{ created }}</p>
			<div v-for="(character, index) in characters" :key="index">
				<p>{{ character.id }}</p>
				<p>{{ character.name }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Episodes` : 'Episodes'
	},
})

type EpisodeResults = {
	episodes: {
		results: {
			id: string
			name: string
			air_date: string
			episode: string
			characters: {
				id: string
				name: string
			}[]
			created: string
		}[]
	}
}

const query = gql`
	query getEpisodes {
		episodes {
			# info {
			# 	count
			# 	pages
			# 	next
			# 	prev
			# }
			results {
				id
				name
				air_date
				episode
				characters {
					id
					name
				}
				created
			}
		}
	}
`

const { data } = await useAsyncQuery<EpisodeResults>(query)
</script>
