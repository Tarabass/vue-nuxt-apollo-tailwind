<template>
	<nav aria-label="Page navigation example" class="border-0 text-center m-8">
		<ul class="inline-flex items-center text-gray-800 opacity-50 text-md">
			<!-- Previous button (disabled) -->
			<PaginationItem
				:page="previous"
				:is-disabled="!previous"
				is-previous
			/>
			<!-- Pages -->
			<PaginationItem
				v-for="(page, index) in pagesToDisplay"
				:key="index"
				:page="page"
			/>
			<!-- Next button -->
			<PaginationItem :page="next" :is-disabled="!next" is-next />
		</ul>
	</nav>
</template>

<script setup>
const props = defineProps({
	pages: {
		type: Number,
		required: true,
	},
	previous: {
		type: Number,
		required: true,
	},
	next: {
		type: Number,
		required: true,
	},
	size: {
		type: Number,
		default: 15
	}
})
const route = useRoute()
const pagesToDisplay = computed(() => {
	const pagesArray = pagesToArray()
	let start = route.query.page - props.size / 2
	let end = start + props.size

	if (start < 0 || !route.query.page) {
		start = 0
		end = props.size
	} else if (end > pagesArray.length) {
		start = pagesArray.length - props.size
		end = pagesArray.length
	}

	return pagesArray.slice(start, end)
})

const pagesToArray = () => {
	const allPagesArray = []

	for (let i = 1; i <= props.pages; i++) {
		allPagesArray.push(i)
	}

	return allPagesArray
}
</script>
