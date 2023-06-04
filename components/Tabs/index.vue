<template>
    <nav class="mb-3 text-center">
        <ul class="inline-flex">
            <TabsItem
                v-for="tabItem in tabItems"
                :to="tabItem.to"
                :label="tabItem.label"
            />
        </ul>
    </nav>
    <slot name="content" />
</template>

<script lang="ts" setup>
type TabItem = {
    label: string;
    to: string;
};

interface Props {
    tabItems: Array<TabItem>;
}
defineProps<Props>();
</script>
