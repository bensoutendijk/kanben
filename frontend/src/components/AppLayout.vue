<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.app-container {
  height: calc(100vh - var(--app-header-height));
}
</style>
