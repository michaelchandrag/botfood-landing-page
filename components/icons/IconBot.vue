<script setup>
defineProps({
  size: { type: Number, default: 22 }
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="3" />
    <path d="M12 7V3M8 3h8" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
  </svg>
</template>
