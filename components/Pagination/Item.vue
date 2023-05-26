<template>
	<li>
		<a
			class="rounded-full px-5 py-3 transition-all duration-300 hover:bg-neutral-200"
			:class="classObject"
			:href="getHref()"
			>{{ label }}</a
		>
	</li>
</template>

<script setup lang="ts">
const props = defineProps<{
	page: number
	isPrevious?: boolean
	isNext?: boolean
	isDisabled?: boolean
}>()
const route = useRoute()
const isCurrent = route.query.page && +route.query.page === props.page
const classObject = computed(() => ({
	'bg-neutral-300 font-bold text-xl': isCurrent,
	'pointer-events-none': props.isDisabled,
}))
const label = props.isPrevious ? 'Previous' : props.isNext ? 'Next' : props.page

const getHref = () => {
	return `${route.path}?page=${props.page}`
}
</script>
