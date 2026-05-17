<script setup>
import { WA_HREF } from '~/composables/useConstants'

const expanded = ref(false)
</script>

<template>
  <div
    class="floating-wa"
    style="position: fixed; right: 24px; bottom: 24px; z-index: 90;"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
  >
    <a
      :href="WA_HREF"
      target="_blank"
      rel="noopener"
      class="floating-wa-link"
      :style="{
        display: 'flex', alignItems: 'center', gap: '10px',
        background: 'var(--wa)',
        color: 'white',
        padding: expanded ? '14px 20px 14px 16px' : '14px',
        borderRadius: '999px',
        boxShadow: '0 12px 30px rgba(37, 211, 102, 0.4)',
        transition: 'all .25s ease',
        animation: 'glow 2.4s ease-in-out infinite',
      }"
    >
      <IconWA :size="24" />
      <span
        class="floating-wa-label"
        :style="{
          fontWeight: 700, fontSize: '14px',
          maxWidth: expanded ? '200px' : '0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transition: 'max-width .25s ease',
        }"
      >
        Chat dengan tim
      </span>
    </a>
  </div>
</template>
