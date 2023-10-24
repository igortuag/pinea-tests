<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div class="about">
    <section>
      <h1>This is an about page</h1>
      <p>Counter: {{ counterStore.count }}</p>
      <p>Double Count: {{ counterStore.doubleCount }}</p>
      <button @click="counterStore.increment">increment</button>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
