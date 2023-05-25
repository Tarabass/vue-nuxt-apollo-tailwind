<template>
	<figure
		class="bg-gray-300 rounded-xl transition duration-300 ease-in-out hover:shadow-lg max-w-[300px]"
	>
		<NuxtLink :to="`/characters/${id}`">
			<div
				class="overflow-hidden bg-cover bg-no-repeat rounded-t-xl rounded-b-none"
			>
				<NuxtImg
					class="transition duration-300 ease-in-out hover:scale-110"
					:src="image"
					:modifiers="grayScaleWhenDead"
				/>
			</div>
			<figcaption class="m-3 text-sm text-gray-500">
				<h3 class="text-xl mb-3">{{ name }}</h3>
				<p>Status: {{ status }}</p>
				<p>Species: {{ species }}</p>
				<p>Location: {{ location }}</p>
			</figcaption>
		</NuxtLink>
	</figure>
</template>
<script lang="ts" setup>
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	species: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
})

const grayScaleWhenDead = computed(() =>
	props.status === 'Dead' ? { grayscale: true } : undefined
)
</script>
