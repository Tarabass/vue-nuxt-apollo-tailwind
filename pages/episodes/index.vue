<template>
  <div class="grid grid-cols-5 gap-4">
    <EpisodeCard
      v-for="{ id, name, air_date, episode, characters } in data.episodes
        .results"
      :key="id"
      :id="id"
      :name="name"
      :air-date="air_date"
      :episode="episode"
      :characters="characters.length"
    />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Episodes` : "Episodes";
  },
});

type EpisodeResults = {
  episodes: {
    results: {
      id: string;
      name: string;
      air_date: string;
      episode: string;
      characters: {
        id: string;
      }[];
    }[];
  };
};

const query = gql`
  query getEpisodes {
    episodes {
      # info {
      # 	count
      # 	pages
      # 	next
      # 	prev
      # }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<EpisodeResults>(query);
</script>
