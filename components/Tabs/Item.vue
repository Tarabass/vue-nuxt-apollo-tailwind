<template>
	<li
		class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"
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
