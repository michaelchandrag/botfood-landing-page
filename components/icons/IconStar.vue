<script setup>
defineProps({
  size: { type: Number, default: 16 },
  filled: { type: Boolean, default: true }
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="filled ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.8">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
</template>
