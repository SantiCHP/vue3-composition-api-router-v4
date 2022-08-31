<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore()

const { increment } = useCounter;
const { count, double } = storeToRefs( useCounter );
</script>

<template>
  <h1 class="fs-2 my-4">Home counter: {{ count }}</h1>
  <h2 class="fs-4 text-muted my-2">Double: {{ double }}</h2>
  <button
    @click="increment"
    class="btn btn-outline-primary"
  >
    Increment
  </button>
</template>
