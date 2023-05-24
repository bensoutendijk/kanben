<script setup lang="ts">
import { useDark } from "@/composables/useDark";
import SwitchButton from "./SwitchButton.vue";

const isDark = useDark();
</script>

<template>
  <header class="app-header">
    <nav>
      <SwitchButton v-model="isDark" />
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
:root {
  --app-header-height: 24px;
}

.app-header {
  height: var(--app-header-height);
  background-color: var(--color-gray-100);

  nav {
    padding: 0 1em;
    justify-content: end;
    display: flex;
    gap: 1em;

    a {
      color: var(--text-color-dark);

      &:hover {
        color: var(--text-color-weak);
        text-decoration: none;
      }
    }
  }
}
</style>
