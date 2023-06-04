<template>
    <div class="mb-5 text-sm text-center">
        <h3 class="mb-2 text-xl text-blue-400">{{  data.episode.name }}</h3>
        <p>{{ data.episode.episode }}</p>
        <p>{{ data.episode.air_date }}</p>
      </div>
    <section class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 cursor-default">
        <figure
            v-for="{ name, image, status, species } in data.episode
                .characters"
            class="flex rounded-xl bg-neutral-100 items-center"
        >
            <!-- <div class=""> -->
            <div class="">
                <NuxtImg
                    class="rounded-l-xl"
                    :src="image"
                    :title="name"
                    width="80"
                    height="80"
                />
            </div>
            <figcaption class="ml-3 text-sm w-1/2">
                <h3 class="text-xl text-blue-400 truncate">{{ name }}</h3>
                <p class="truncate">Status: {{ status }}</p>
                <p class="truncate">Species: {{ species }}</p>
            </figcaption>
        </figure>
    </section>
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
            image: string;
            status: string;
            species: string;
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
                image
                status
                species
            }
        }
    }
`;

const { data } = await useAsyncQuery<EpisodeResult>(query, {
    id: route.params.id,
});
</script>

<style scoped></style>
