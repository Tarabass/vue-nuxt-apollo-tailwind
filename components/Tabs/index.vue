<template>
	<nav class="text-center">
		<ul class="inline-flex">
			<TabsItem
				v-for="tabItem in tabItems"
				:to="tabItem.to"
				:label="tabItem.label"
			/>
		</ul>
	</nav>
	<main class="my-4">
		<slot name="content" />
	</main>
</template>

<script lang="ts" setup>
type TabItem = {
	label: string
	to: string
}

interface Props {
	tabItems: Array<TabItem>
}
defineProps<Props>()
</script>
