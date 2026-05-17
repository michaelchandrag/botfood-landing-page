<script setup>
defineProps({
  size: { type: Number, default: 32 }
})
</script>

<template>
  <div
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: '\'Nunito\', system-ui, sans-serif',
      fontWeight: 900,
      fontSize: size + 'px',
      letterSpacing: '-0.04em',
      lineHeight: 1,
    }"
  >
    <span style="color: white">bot</span>
    <span style="color: var(--brand)">food</span>
  </div>
</template>
