<script lang="ts" setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <TheHeader id="nav" />
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.params.id"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
