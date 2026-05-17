<script setup>
import { WA_HREF, WA_DISPLAY } from '~/composables/useConstants'

const headline = 'Sudah berapa lama outlet Anda tutup tanpa Anda tahu?'
</script>

<template>
  <section style="background: var(--dark-2); color: white; padding: 112px 0; position: relative; overflow: hidden;">
    <div style="position: absolute; top: -30%; left: 50%; transform: translateX(-50%); width: 900px; height: 900px; background: radial-gradient(circle, rgba(0,123,27,0.2), transparent 60%); pointer-events: none;" />
    <div class="container" style="position: relative; text-align: center;">
      <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(0, 123, 27, 0.18); border: 1px solid rgba(0, 123, 27, 0.4); color: #58d278; border-radius: 999px; font-size: 13px; font-weight: 700; margin-bottom: 24px;">
        <IconDot color="#58d278" :size="7" />
        Tim kami siap membantu
      </div>
      <h2 style="font-size: clamp(34px, 5vw, 56px); line-height: 1.08; max-width: 800px; margin: 0 auto 20px; color: white; text-wrap: balance;">
        {{ headline }}
      </h2>
      <p style="font-size: 19px; color: rgba(255,255,255,0.72); max-width: 560px; margin: 0 auto 36px; line-height: 1.5; text-wrap: pretty;">
        Take control & monitor everything. Hubungi tim Botfood sekarang — demo gratis, tanpa kontrak panjang.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a :href="WA_HREF" target="_blank" rel="noopener" class="btn btn-wa" style="padding: 16px 28px; font-size: 16px;">
          <IconWA :size="18" /> Chat WhatsApp Sekarang
        </a>
        <a href="#fitur" class="btn btn-dark" style="padding: 16px 28px; font-size: 16px;">
          Pelajari fitur
          <IconArrow :size="16" />
        </a>
      </div>
      <div style="margin-top: 28px; font-size: 13px; color: rgba(255,255,255,0.5); font-family: var(--font-mono);">
        {{ WA_DISPLAY }}
      </div>
    </div>
  </section>
</template>
