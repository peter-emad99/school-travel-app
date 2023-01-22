<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { inject } from "vue";
import { TravelData } from "@/injectionKeys";

const destinations = inject(TravelData);
</script>

<template>
  <div>
    <h1>404</h1>
    <h2>Not found</h2>
    <p>
      try to go to the <RouterLink :to="{ name: 'home' }">Home</RouterLink> Page
    </p>
  </div>
</template>

<style lang="scss"></style>
