<script setup>
const cards = [
  {
    num: '01',
    badge: 'Status outlet',
    badgeColor: 'var(--danger)',
    title: 'Outlet buka atau tutup — di jam yang seharusnya?',
    desc: 'Saat jam operasional tapi outlet status "Tutup", itu artinya tidak jualan. Botfood deteksi instan — Anda langsung suruh tim buka sebelum kehilangan omzet.',
    bullets: [
      '4 platform sekaligus: GrabFood, GoFood, ShopeeFood, AirAsiaFood',
      'Hitungan: total outlet, buka, tutup, item aktif/tidak aktif',
      'Highlight otomatis platform yang butuh attention',
    ],
    component: 'Mock1Status',
  },
  {
    num: '02',
    badge: 'Performa item',
    badgeColor: 'var(--brand)',
    title: 'Outlet mana yang underperform — siapa di bawah target?',
    desc: 'Target ideal: 100% (semua menu aktif). Outlet dengan performa rendah = banyak menu mati = jualan tidak maksimal. Botfood urutkan otomatis dari yang terendah.',
    bullets: [
      'Top 5 outlet terbaik & terendah per platform',
      'Filter per GoFood / GrabFood / ShopeeFood',
      'Visual bar: gampang spot outlet yang butuh action',
    ],
    component: 'Mock2Performa',
  },
  {
    num: '03',
    badge: 'Item tidak seragam',
    badgeColor: '#e6a411',
    title: 'Menu sama, status beda antar platform — daily task',
    desc: 'Menu yang sama: aktif di GoFood, mati di GrabFood, mati di ShopeeFood. Ini sering terjadi tanpa Anda tahu — Botfood listing semuanya jadi daily task untuk dibetulkan.',
    bullets: [
      '119 item tidak seragam terdeteksi (contoh outlet)',
      'Per outlet × per menu × 3 platform: matrix lengkap',
      'Customer Anda yang rugi kalau tidak konsisten — fix segera',
    ],
    component: 'Mock3Seragam',
  },
]

const badgeBg = (color) => {
  if (color === 'var(--brand)') return 'rgba(0,123,27,0.1)'
  if (color === 'var(--danger)') return 'rgba(214,69,69,0.1)'
  return 'rgba(230,164,17,0.12)'
}
</script>

<template>
  <section id="dashboard-tour" class="section" style="background: var(--bg); position: relative;">
    <!-- Grid pattern background -->
    <div
      style="position: absolute; inset: 0;
        background-image: linear-gradient(rgba(0,123,27,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,27,0.04) 1px, transparent 1px);
        background-size: 64px 64px;
        mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        pointer-events: none;"
    />

    <div class="container" style="position: relative; max-width: 1180px;">
      <div class="section-head">
        <span class="eyebrow">Dashboard Tour</span>
        <h2>Lihat dashboard <em>dari dekat</em></h2>
        <p>3 hal yang langsung kelihatan begitu Anda buka Beranda Botfood. Masalah yang dulu tidak ketahuan — sekarang terdeteksi otomatis.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 80px;">
        <div
          v-for="(c, i) in cards"
          :key="c.num"
          class="dash-row"
          :style="{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '56px',
            alignItems: 'center',
            direction: i % 2 === 1 ? 'rtl' : 'ltr',
          }"
        >
          <div style="direction: ltr;">
            <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 20px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: var(--brand); padding: 4px 10px; border: 1px solid var(--border); background: white; border-radius: 999px;">
                / {{ c.num }}
              </div>
              <span
                :style="{
                  fontSize: '11px', fontWeight: 800,
                  padding: '4px 10px', borderRadius: '999px',
                  background: badgeBg(c.badgeColor),
                  color: c.badgeColor,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }"
              >
                {{ c.badge }}
              </span>
            </div>
            <h3 style="font-size: clamp(26px, 2.8vw, 36px); line-height: 1.12; margin-bottom: 16px; text-wrap: balance; letter-spacing: -0.02em;">
              {{ c.title }}
            </h3>
            <p style="font-size: 17px; line-height: 1.55; color: var(--ink-2); margin-bottom: 22px; text-wrap: pretty;">
              {{ c.desc }}
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div
                v-for="(b, j) in c.bullets"
                :key="j"
                style="display: flex; align-items: flex-start; gap: 10px; font-size: 15px;"
              >
                <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--bg-tint); color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
                  <IconCheck :size="12" />
                </div>
                <span style="color: var(--ink-2); line-height: 1.5;">{{ b }}</span>
              </div>
            </div>
          </div>
          <div style="direction: ltr;">
            <DashboardMock1Status v-if="c.component === 'Mock1Status'" />
            <DashboardMock2Performa v-else-if="c.component === 'Mock2Performa'" />
            <DashboardMock3Seragam v-else-if="c.component === 'Mock3Seragam'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .dash-row {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 28px !important;
    direction: ltr !important;
  }
}
</style>
