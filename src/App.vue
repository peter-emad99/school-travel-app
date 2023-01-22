<script setup lang="ts">
import PagesRouting from "./views/PagesRouting.vue";
import data from "@/assets/data.json";
import { provide, inject } from "vue";
import { TravelData } from "@/injectionKeys";
provide(TravelData, data.destinations);
</script>

<template>
  <PagesRouting />
</template>

<style lang="scss" scoped></style>
