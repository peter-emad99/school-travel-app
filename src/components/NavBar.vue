<template>
  <nav id="nav">
    <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
    <div>
      <template v-for="dest in destinations" :key="dest.id">
        <RouterLink
          :to="{
            name: 'destinations',
            params: { id: dest.id, slug: dest.slug },
          }"
          >{{ dest.name }}</RouterLink
        >
      </template>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { inject } from "vue";
import { TravelData } from "@/injectionKeys";

const destinations = inject(TravelData);
</script>

<style lang="scss" scoped></style>
