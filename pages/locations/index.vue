<template>
	<div class="grid grid-cols-5 justify-items-center gap-4">
		<div
			v-for="{ id, name, type, dimension, residents, created } in data
				.locations.results"
			:key="id"
		>
			<p>{{ name }}</p>
			<p>{{ type }}</p>
			<p>{{ dimension }}</p>
			<p>{{ created }}</p>
			<div v-for="(resident, index) in residents" :key="index">
				<p>{{ resident.id }}</p>
				<p>{{ resident.name }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Locations` : 'Locations'
	},
})

type LocationResults = {
	locations: {
		results: {
			id: string
			name: string
			type: string
			dimension: string
			residents: {
				id: string
				name: string
			}[]
			created: string
		}[]
	}
}

const query = gql`
	query getLocations {
		locations {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				type
				dimension
				residents {
					id
					name
				}
				created
			}
		}
	}
`

const { data } = await useAsyncQuery<LocationResults>(query)
</script>
