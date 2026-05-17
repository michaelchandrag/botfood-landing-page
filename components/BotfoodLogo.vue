<script setup>
defineProps({
  size: { type: Number, default: 32 }
})
</script>

<template>
  <img
    src="/botfood_logo.png"
    alt="Botfood"
    :style="{
      height: size + 'px',
      width: 'auto',
      display: 'block',
    }"
  />
</template>
