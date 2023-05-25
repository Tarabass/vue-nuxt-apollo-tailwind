<template>
	<li
		class="px-1 py-2 sm:px-1 sm:py-2 md:px-2 md:py-3 2xl:px-4 2xl:py-2 font-semibold text-gray-800 rounded-t opacity-50 text-xs sm:text-xs"
		:class="activeClasses"
	>
		<NuxtLink :to="to"> {{ label }} </NuxtLink>
	</li>
</template>
<script setup lang="ts">
const props = defineProps({
	to: String,
	label: String,
})
const route = useRoute()
const activeClasses = ref('')

watch(
	() => route.path,
	async (path) => {
		activeClasses.value =
			path === props.to ? 'border-b-2 border-blue-400' : ''
	},
	{ immediate: true }
)
</script>
