import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  // actions
  function increment() {
    count.value++
  }

  // getters
  return { count, doubleCount, increment }
})
