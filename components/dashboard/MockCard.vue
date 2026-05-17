<script setup>
const props = defineProps({
  glow: { type: String, default: 'var(--brand)' },
})

const glowBg = computed(() => {
  if (props.glow === 'var(--brand)') return 'rgba(0,123,27,0.12)'
  if (props.glow === 'var(--danger)') return 'rgba(214,69,69,0.12)'
  return 'rgba(230,164,17,0.12)'
})
</script>

<template>
  <div style="position: relative;">
    <div
      :style="{
        position: 'absolute', inset: '-16px',
        background: `radial-gradient(ellipse at 50% 50%, ${glowBg}, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 0,
      }"
    />
    <div style="position: relative; background: white; border-radius: 16px; border: 1px solid var(--border); box-shadow: 0 24px 60px -16px rgba(12, 32, 14, 0.18), 0 8px 24px -12px rgba(12, 32, 14, 0.08); overflow: hidden; z-index: 1;">
      <!-- Browser tab strip -->
      <div style="display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: #f5f7f5; border-bottom: 1px solid var(--border);">
        <span style="width: 9px; height: 9px; border-radius: 50%; background: #ff5f56;" />
        <span style="width: 9px; height: 9px; border-radius: 50%; background: #ffbd2e;" />
        <span style="width: 9px; height: 9px; border-radius: 50%; background: #27c93f;" />
        <div style="margin-left: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--ink-3);">
          botfood.id / beranda
        </div>
      </div>
      <div style="padding: 20px;">
        <slot />
      </div>
    </div>
  </div>
</template>
