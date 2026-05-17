<script setup>
const cases = [
  {
    platform: 'grab',
    platformLabel: 'GrabFood',
    color: 'var(--grabfood)',
    tag: 'Case · 1',
    title: 'Item "aktif" di GrabMerchant — hilang di GrabFood',
    story: 'GrabMerchant menunjukkan semua item aktif. Tapi di aplikasi GrabFood customer, item tidak muncul karena disuspend platform atau system error.',
    outcome: 'Tanpa Botfood, tidak akan ketahuan.',
    detailMerchant: 'GrabMerchant: 50/50 aktif',
    detailCustomer: 'GrabFood: hanya 34/50 terlihat',
  },
  {
    platform: 'go',
    platformLabel: 'GoFood',
    color: 'var(--gofood)',
    tag: 'Case · 2',
    title: 'Item kena auto-nonaktif karena variasi wajib belum terisi',
    story: 'GoBiz menunjukkan semua item aktif. Tapi di GoFood customer, item tidak muncul karena minimum variasi wajib belum terpenuhi — GoFood otomatis nonaktifkan item.',
    outcome: 'Tanpa Botfood, tidak akan ketahuan.',
    detailMerchant: 'GoBiz: semua aktif',
    detailCustomer: 'GoFood: 12 item hilang',
  },
]
</script>

<template>
  <section id="studi-kasus" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Studi Kasus Nyata</span>
        <h2>Masalah yang <em>tidak kelihatan</em> dari aplikasi merchant</h2>
        <p>Dua kasus yang benar-benar terjadi di outlet klien kami — dan tidak akan ketahuan tanpa Botfood.</p>
      </div>
      <div class="cs-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
        <div
          v-for="(c, i) in cases"
          :key="i"
          style="background: white; border: 1px solid var(--border); border-radius: 20px; padding: 28px; position: relative; overflow: hidden;"
        >
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <PlatformIcon :name="c.platform" :size="28" />
              <div>
                <div style="font-size: 11px; color: var(--ink-3); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;">{{ c.tag }}</div>
                <div :style="{ fontSize: '15px', fontWeight: 800, color: c.color }">{{ c.platformLabel }}</div>
              </div>
            </div>
          </div>

          <h3 style="font-size: 22px; line-height: 1.2; margin-bottom: 12px; text-wrap: balance;">{{ c.title }}</h3>
          <p style="font-size: 15px; color: var(--ink-2); line-height: 1.55; margin-bottom: 20px; text-wrap: pretty;">{{ c.story }}</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
            <div style="padding: 12px; border-radius: 10px; background: var(--bg-tint); border: 1px solid var(--border);">
              <div style="font-size: 10px; font-weight: 700; color: var(--ink-3); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px;">
                Merchant view
              </div>
              <div style="font-size: 13px; font-weight: 700; color: var(--ink);">{{ c.detailMerchant }}</div>
            </div>
            <div style="padding: 12px; border-radius: 10px; background: rgba(214,69,69,0.06); border: 1px solid rgba(214,69,69,0.18);">
              <div style="font-size: 10px; font-weight: 700; color: #c53131; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px;">
                Customer view
              </div>
              <div style="font-size: 13px; font-weight: 700; color: #c53131;">{{ c.detailCustomer }}</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: var(--bg-tint); border-radius: 10px; font-size: 13px; font-weight: 700; color: var(--brand);">
            <IconEye :size="14" />
            {{ c.outcome }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 820px) {
  .cs-grid { grid-template-columns: 1fr !important; }
}
</style>
