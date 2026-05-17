<script setup>
import { WA_HREF } from '~/composables/useConstants'
</script>

<template>
  <footer style="background: #0a0f0a; color: rgba(255,255,255,0.72); padding: 56px 0 32px; border-top: 1px solid rgba(255,255,255,0.06);">
    <div class="container">
      <div class="footer-grid" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px;">
        <div>
          <div style="margin-bottom: 16px;">
            <BotfoodLogoDark :size="24" />
          </div>
          <p style="font-size: 14px; line-height: 1.6; max-width: 320px;">
            CCTV untuk outlet online Anda. Pantau GrabFood, GoFood & ShopeeFood dalam satu dashboard.
          </p>
        </div>
        <div>
          <div style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 12px; letter-spacing: 0.04em; text-transform: uppercase;">
            Produk
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
            <a href="#dashboard-tour">Beranda Monitor</a>
            <a href="#fitur">Rating</a>
            <a href="#fitur">Outlet</a>
            <a href="#fitur">Item</a>
            <a href="#fitur">Ulasan</a>
          </div>
        </div>
        <div>
          <div style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 12px; letter-spacing: 0.04em; text-transform: uppercase;">
            Perusahaan
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
            <a href="#studi-kasus">Studi Kasus</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#harga">Harga</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div>
          <div style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 12px; letter-spacing: 0.04em; text-transform: uppercase;">
            Kontak
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
            <a :href="WA_HREF" target="_blank" rel="noopener">WhatsApp</a>
            <a href="mailto:botfood.id@gmail.com">botfood.id@gmail.com</a>
            <a href="https://botfood.id" target="_blank" rel="noopener">botfood.id</a>
          </div>
        </div>
      </div>
      <div style="padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center; font-size: 13px; flex-wrap: wrap; gap: 12px;">
        <div>© 2026 Botfood. All rights reserved.</div>
        <div style="color: rgba(255,255,255,0.4);">Take control & monitor everything.</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width: 820px) {
  .footer-grid { grid-template-columns: 1fr 1fr !important; }
}
</style>
