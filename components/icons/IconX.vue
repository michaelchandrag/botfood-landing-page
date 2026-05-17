<script setup>
defineProps({
  size: { type: Number, default: 16 }
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
</template>
