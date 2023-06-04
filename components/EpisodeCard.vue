<template>
  <article
    class="sm:max-w-[300px] rounded-xl bg-neutral-100 transition duration-300 ease-in-out hover:shadow-lg"
  >
    <NuxtLink :to="`/episodes/${id}`">
      <div class="p-3 text-sm">
        <h3 class="mb-2 text-xl text-blue-400">{{ name }}</h3>
        <p>Episode: {{ episode }}</p>
        <p>Air date: {{ airDate }}</p>
        <p>Characters: {{ characters }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  airDate: {
    type: String,
    required: true,
  },
  episode: {
    type: String,
    required: true,
  },
  characters: {
    type: Number,
  },
});
</script>
