<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { inject } from "vue";
import { TravelData } from "@/injectionKeys";

const destinations = inject(TravelData);
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations cards">
      <div class="cards">
        <template v-for="dest in destinations" :key="dest.id">
          <RouterLink
            :to="{
              name: 'destinations',
              params: { id: dest.id, slug: dest.slug },
            }"
          >
            <div class="card">
              <span class="card__text">{{ dest.name }}</span>
              <img :src="`/images/${dest.image}`" :alt="dest.name" /></div
          ></RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
