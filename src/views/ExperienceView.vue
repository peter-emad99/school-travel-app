<template>
  <section>
    <h1 ref="expView">{{ experience.name }}</h1>
    <div class="experience-details">
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, computed, ref, onUpdated, watch } from "vue";
import { TravelData } from "@/injectionKeys";
import type { TDestination } from "@/components/DestinationItem.vue";
export interface TExperience {
  name: string;
  slug: string;
  image: string;
  description: string;
}
const props = defineProps<{
  id: number;
  expSlug: string;
}>();

const destinations = inject(TravelData) as TDestination[];
const experience = computed(
  () =>
    destinations
      .find((dest) => dest.id === props.id)
      ?.experiences.find((exp) => exp.slug === props.expSlug) as TExperience
);

const expView = ref<HTMLInputElement | null>(null);
onUpdated(() => expView.value?.scrollIntoView({ behavior: "smooth" }));
watch(expView, () =>
  expView.value?.parentElement?.scrollIntoView({ behavior: "smooth" })
);
</script>

<style lang="sass" scoped></style>
