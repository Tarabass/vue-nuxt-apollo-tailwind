<template>
  <EpisodeCard
    :id="data.episode.id"
    :name="data.episode.name"
    :airDate="data.episode.air_date"
    :episode="data.episode.episode"
  />
  <div v-for="{ id, name } in data.episode.characters">
    <p>{{ id }}</p>
    <p>{{ name }}</p>
  </div>
  <NuxtLink :to="'/episodes'">Go back</NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();

type EpisodeResult = {
  episode: {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: {
      id: string;
      name: string;
    }[];
  };
};

const query = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;

const { data } = await useAsyncQuery<EpisodeResult>(query, {
  id: route.params.id,
});
</script>

<style scoped></style>
