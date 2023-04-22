<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

const auth0 = useAuth0();
const router = useRouter();

if (!auth0.user.value) {
  auth0.loginWithRedirect();
} else {
  router.push("/");
}
</script>

<template>
  <h1>Redirecting to login...</h1>
</template>
