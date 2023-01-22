<template>
  <div>
    <DestinationItem v-if="destination" :destination="destination" />
  </div>
</template>

<script setup lang="ts">
import DestinationItem from "@/components/DestinationItem.vue";
import type { TDestination } from "@/components/DestinationItem.vue";
import { inject, computed, ref, onMounted } from "vue";
import { TravelData } from "@/injectionKeys";
import { useFetch } from "@vueuse/core";
import { useRouter, useRoute } from "vue-router";
const props = defineProps<{
  id: number;
  slug: string;
}>();

/* ----- load the destination from the API ----- */
/* let destination = ref(null);
const url = computed(
  () => `https://travel-dummy-api.netlify.app/${props.slug}`
);
const { isFetching, error, data } = useFetch(url, {
  refetch: true,
  afterFetch(ctx) {
    destination.value = ctx.data;
    return ctx.data;
  },
}).json(); */

/* ----- load the destination from the JSON file ----- */
const destinations = inject(TravelData) as TDestination[];
const destination = computed(() =>
  destinations.find((dest) => dest.id === props.id)
);

/* reRouting to the not found page if there is no destination found in Data*/
// alternatively we could use the beforeEnter method on route  to get the same result
const route = useRoute();
const router = useRouter();
onMounted(() => {
  let dest = destinations.find((dest) => dest.id === props.id) as TDestination;
  if (dest == null) {
    router.push({
      name: "NotFound",
      params: { pathMatch: route.path.split("/").slice(1) },
      query: route.query,
    });
    console.log("there is no destination");
  }
});

// if (!destination) {
//   router.push({ name: "NotFound" });
//   console.log("ther not destination");
// }
</script>

<style lang="sass" scoped></style>
