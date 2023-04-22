<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";

const { logout } = useAuth();

function onLogout() {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
}
</script>

<template>
  <button @click="onLogout">Logout</button>
</template>
