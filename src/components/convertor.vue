<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "lodash";
import { passwordHistory } from "../core/passwordHistory";

const password = ref("");

const search = debounce(() => {
  if (password.value.length <= 0) return;

  const bytes = Array.from({ length: password.value.length }).map((_, i) => password.value.charCodeAt(i) ^ 5);
  const result = String.fromCharCode.apply(String, bytes);

  passwordHistory.value.push({
    timestamp: Date.now(),
    input: password.value,
    output: result,
  });
}, 300);
</script>

<template>
  <input
    type="text"
    name="password"
    id="password"
    placeholder="Put password here"
    v-model="password"
    @input="search()"
  />
</template>

<style scoped>
input {
  background: transparent;
  border: none;
  border-bottom: 1px dotted var(--fontColor);
  color: inherit;
  font-size: 4rem;
  padding: 10px;
  font-family: inherit;
  width: calc(100vw - 20px);
  text-align: center;
}

input:focus {
  outline: none;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

/* https://youtu.be/BiGqMZHjDfQ?list=RDGMEM_v2KDBP3d4f8uT-ilrs8fQ */
</style>
