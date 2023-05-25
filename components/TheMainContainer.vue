<template>
	<Tabs :tab-items="tabItems">
		<template v-slot:content>
			<slot />
		</template>
	</Tabs>
</template>

<script lang="ts" setup>
const tabItems = [
	{
		label: 'Characters',
		to: '/characters',
	},
	{
		label: 'Episodes',
		to: '/episodes',
	},
	{
		label: 'Locations',
		to: '/locations',
	},
]
</script>
