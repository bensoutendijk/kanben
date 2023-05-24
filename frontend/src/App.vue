<script setup lang="ts">
import { RouterView } from "vue-router";
import { provideClient } from "@urql/vue";
import { client } from "./client";

import AppHeader from "./components/AppHeader.vue";
import AppLayout from "./components/AppLayout.vue";

provideClient(client);
</script>

<template>
  <AppHeader />

  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style scoped></style>
