<template>
	<nav aria-label="Page navigation example" class="border-0 text-center m-8">
		<ul class="inline-flex items-center text-gray-800 opacity-50 text-md">
			<!-- Previous button (disabled) -->
			<PaginationItem
				:page="+$route.query.page - 1"
				:is-disabled="+$route.query.page === 1"
				is-previous
			/>
			<!-- Pages -->
			<PaginationItem
				v-for="(page, index) in pages"
				:key="index"
				:page="page"
				:is-disabled="+$route.query.page === page"
			/>
			<!-- Next button -->
			<PaginationItem
				:page="+$route.query.page + 1"
				:is-disabled="+$route.query.page === pages"
				is-next
			/>
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
})
</script>
