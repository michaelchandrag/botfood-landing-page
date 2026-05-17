<script setup>
defineProps({
  size: { type: Number, default: 20 }
})
</script>

<template>
  <img
    src="/p_shopeefood.png"
    :width="size"
    :height="size"
    alt="ShopeeFood"
    style="display: inline-block; vertical-align: middle; border-radius: 50%;"
  />
</template>
