<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();
</script>

<template>
  <slot v-if="user"></slot>
  <slot name="unauthenticated" v-else>
    <h1>404 Error</h1>
  </slot>
</template>
