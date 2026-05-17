<script setup>
defineProps({
  size: { type: Number, default: 20 }
})
</script>

<template>
  <img
    src="/p_gofood.png"
    :width="size"
    :height="size"
    alt="GoFood"
    style="display: inline-block; vertical-align: middle; border-radius: 50%;"
  />
</template>
