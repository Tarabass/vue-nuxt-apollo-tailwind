<template>
  <section
    class="max-w-[300px] rounded-xl bg-neutral-100 transition duration-300 ease-in-out hover:shadow-lg"
  >
    <NuxtLink :to="`/episodes/${id}`">
      <div class="m-3 text-sm">
        <h3 class="mb-3 text-xl">{{ name }}</h3>
        <p>Episode: {{ episode }}</p>
        <p>Air date: {{ airDate }}</p>
        <p>Characters: {{ characters }}</p>
      </div>
    </NuxtLink>
  </section>
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
