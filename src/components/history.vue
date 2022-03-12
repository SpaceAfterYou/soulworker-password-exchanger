<script setup lang="ts">
import { passwordHistory } from "../core/passwordHistory";
</script>

<template>
  <section class="history">
    <header>History</header>
    <div class="values">
      <div class="header input">input</div>
      <div class="header output">output</div>

      <template v-for="{ timestamp, input, output } of passwordHistory.slice().reverse()" :key="timestamp">
        <div class="input">{{ input }}</div>
        <div class="output">{{ output }}</div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.history {
  margin-top: 60px;
  font-size: 2rem;
}

header {
  background-color: #161a1d;
  padding: 20px 0;
  margin: 60px 0;
}

.values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.header {
  text-decoration: underline;
  text-transform: uppercase;
  padding-bottom: 10px;
}
</style>
