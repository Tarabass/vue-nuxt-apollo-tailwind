<template>
	<CharacterCard
		:id="data.character.id"
		:name="data.character.name"
		:image="data.character.image"
		:status="data.character.status"
		:species="data.character.species"
		:location="data.character.location.name"
	/>
	<NuxtLink :to="'/characters'">Go back</NuxtLink>
</template>
<script lang="ts" setup>
const route = useRoute()

type CharacterResult = {
	character: {
		id: string
		name: string
		image: string
		status: string
		species: string
		location: {
			name: string
		}
	}
}

// const query = gql`
// 	query getCharacter($id: ID! = ${route.params.id}) {
//         character(id: $id) {
//         name
//         image
//         status
//         id
//         species
//         location {
//             name
//         }
//         }
//     }
// `

// const { data } = await useAsyncQuery<CharacterResult>(query)

const query = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
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
`

const { data } = await useAsyncQuery<CharacterResult>(query, {
	id: route.params.id,
})
</script>
