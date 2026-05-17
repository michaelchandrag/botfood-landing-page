<script setup>
import { WA_HREF } from '~/composables/useConstants'

const h1Lines = [
  'Outlet online Anda',
  'buka atau tutup?',
]
const accentLine = 'Anda sudah tahu?'
const sub = 'Restoran offline punya CCTV — pantau toko buka, staff siap, customer bisa masuk. Bagaimana dengan outlet GrabFood, GoFood & ShopeeFood Anda?'
</script>

<template>
  <section id="top" style="position: relative; padding-top: 130px; padding-bottom: 80px; overflow: hidden;">
    <!-- Background glow -->
    <div style="position: absolute; top: -200px; left: 50%; transform: translateX(-50%); width: 800px; height: 600px; background: radial-gradient(ellipse at center, rgba(0, 123, 27, 0.1), transparent 60%); pointer-events: none;" />

    <!-- Grid pattern -->
    <div
      style="position: absolute; inset: 0;
        background-image: linear-gradient(rgba(0,123,27,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,27,0.05) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse at 50% 20%, black, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse at 50% 20%, black, transparent 70%);
        pointer-events: none;"
    />

    <div class="container" style="position: relative;">
      <div class="hero-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;">
        <div>
          <div class="eyebrow" style="margin-bottom: 24px;">
            <IconEye :size="14" />
            CCTV untuk outlet online Anda
          </div>
          <h1 style="font-size: clamp(36px, 5vw, 62px); line-height: 1.04; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 24px; text-wrap: balance;">
            <div v-for="(line, i) in h1Lines" :key="i">{{ line }}</div>
            <div><span style="color: var(--brand)">{{ accentLine }}</span></div>
          </h1>
          <p style="font-size: 19px; line-height: 1.55; color: var(--ink-2); margin-bottom: 32px; max-width: 540px; text-wrap: pretty;">
            {{ sub }}
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px;">
            <a :href="WA_HREF" target="_blank" rel="noopener" class="btn btn-primary">
              Coba Gratis 7 Hari
              <IconArrow :size="16" />
            </a>
            <a href="#fitur" class="btn btn-ghost">
              Lihat fitur
            </a>
          </div>

          <!-- Platform chip row -->
          <div
            class="platform-strip"
            style="display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: rgba(255,255,255,0.6); border: 1px solid var(--border); border-radius: 14px; max-width: fit-content; backdrop-filter: blur(8px);"
          >
            <div style="font-size: 12px; color: var(--ink-3); font-weight: 700;">
              Pantau 3 platform:
            </div>
            <div class="platform-strip-list" style="display: flex; align-items: center; gap: 14px;">
              <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700;">
                <IconGrab :size="16" /> GrabFood
              </div>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700;">
                <IconGo :size="16" /> GoFood
              </div>
              <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700;">
                <IconShopee :size="16" /> ShopeeFood
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative;">
          <CCTVDashboard />
          <!-- Floating badge -->
          <div
            class="cctv-float-badge"
            style="position: absolute; top: -16px; left: -16px; background: white; border-radius: 14px; padding: 12px 14px; box-shadow: var(--shadow-md); display: flex; align-items: center; gap: 10px; border: 1px solid var(--border); animation: float 3s ease-in-out infinite;"
          >
            <div style="width: 36px; height: 36px; border-radius: 10px; background: var(--bg-tint); display: flex; align-items: center; justify-content: center; color: var(--brand);">
              <IconBot :size="18" />
            </div>
            <div>
              <div style="font-size: 12px; font-weight: 800;">Dari sudut pandang customer</div>
              <div style="font-size: 11px; color: var(--ink-3);">Bukan aplikasi merchant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr !important; }
}
</style>
