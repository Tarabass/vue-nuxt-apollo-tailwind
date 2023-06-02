<template>
    <li
        class="rounded-t px-1 py-1 text-base font-semibold text-gray-800 opacity-50 sm:px-2 md:px-4 xl:text-lg"
        :class="activeClasses"
    >
        <NuxtLink :to="to"> {{ label }} </NuxtLink>
    </li>
</template>
<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const route = useRoute();
const activeClasses = ref("");

watch(
    () => route.path,
    async (path) => {
        activeClasses.value = path.includes(props.to)
            ? "border-b-2 border-blue-400"
            : "";
    },
    { immediate: true }
);
</script>
