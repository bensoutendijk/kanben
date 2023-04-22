<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user, loginWithRedirect } = useAuth0();

if (!user.value) {
  loginWithRedirect({
    appState: {
      target: window.location.pathname
    }
  });
}
</script>

<template>
  <h1>Welcome {{ user.email }}</h1>
</template>
