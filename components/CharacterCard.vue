<template>
	<figure
		class="rounded-xl bg-neutral-100 transition duration-300 ease-in-out hover:shadow-lg"
	>
		<NuxtLink :to="`/characters/${id}`">
			<div
				class="overflow-hidden rounded-b-none rounded-t-xl bg-cover bg-no-repeat"
			>
				<NuxtImg
					class="transition duration-300 ease-in-out hover:scale-110"
					:src="image"
					:modifiers="grayScaleWhenDead"
				/>
			</div>
			<figcaption class="m-3 text-sm">
				<h3 class="mb-3 text-xl">{{ name }}</h3>
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
