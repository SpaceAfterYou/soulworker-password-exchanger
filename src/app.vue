<script setup lang="ts">
import Convertor from "./components/convertor.vue";
import History from "./components/history.vue";
</script>

<template>
  <Convertor />
  <History />
</template>

<style>

:root {
  --fontColor: rgba(255, 255, 255, 0.7);
}

body {
  background-color: #0b090a;
  min-height: 100%;
}

#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--fontColor);
  margin-top: 60px;
}
</style>
