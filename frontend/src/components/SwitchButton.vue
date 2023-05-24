<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:model-value", value: boolean): void;
}>();

const positionRight = computed(() => (props.modelValue ? "0" : "calc(100% - 1em)"));
</script>

<template>
  <div class="switch-button">
    <div class="switch-button--wrapper">
      <button class="switch-button--button" @click="emit('update:model-value', !modelValue)" />
    </div>
  </div>
</template>

<style lang="scss">
.switch-button {
  height: 1em;

  .switch-button--wrapper {
    position: relative;
    width: 2em;
    height: 1em;
    border: 1px var(--border-color) solid;
    border-radius: 0.5em;
    background-color: var(--color-gray-600);
  }

  .switch-button--button {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px var(--border-color) solid;
    border-radius: 0.5em;
    background: none;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: v-bind(positionRight);
      height: 1em;
      width: 1em;
      border-radius: 0.5em;
      transition: right 200ms ease;
      background-color: var(--color-gray-400);
    }
  }
}
</style>
