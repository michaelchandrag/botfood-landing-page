<script setup>
defineProps({
  color: { type: String, default: 'var(--ok)' },
  size: { type: Number, default: 8 },
  pulse: { type: Boolean, default: true }
})
</script>

<template>
  <span
    :style="{
      display: 'inline-block',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: color,
      animation: pulse ? 'pulse-dot 2s ease-in-out infinite' : 'none',
      flexShrink: 0,
    }"
  />
</template>
