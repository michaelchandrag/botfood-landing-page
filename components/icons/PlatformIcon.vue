<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 20 }
})
</script>

<template>
  <IconGrab v-if="name === 'grab'" :size="size" />
  <IconGo v-else-if="name === 'go'" :size="size" />
  <IconShopee v-else-if="name === 'shopee'" :size="size" />
</template>
