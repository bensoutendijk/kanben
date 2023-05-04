<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { provideClient } from "@urql/vue";

import { client } from "./client";

provideClient(client);
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
