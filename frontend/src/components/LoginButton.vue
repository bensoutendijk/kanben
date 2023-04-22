<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";

const { loginWithRedirect } = useAuth();

function login() {
  loginWithRedirect();
}
</script>

<template>
  <button @click="login">Log in</button>
</template>
