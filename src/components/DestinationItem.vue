<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <button class="go-back" @click="$router.back()">Go Back</button>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences" id="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink
        v-for="exp in destination.experiences"
        :to="{ name: 'experiences', params: { expSlug: exp.slug } }"
        :key="exp.name"
      >
        <Experience :experience="exp" :key="exp.name" />
      </RouterLink>
    </div>
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import Experience from "./ExperienceItem.vue";
import type { TExperience } from "./ExperienceItem.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

export interface TDestination {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: Array<TExperience>;
}
const props = defineProps<{
  destination: TDestination;
}>();

const route = useRoute();
</script>

<style lang="sass" scoped></style>
