<script setup>
const features = [
  {
    num: '01',
    eyebrow: 'Rating',
    title: 'Tren rating harian — naik atau turun, langsung ketahuan',
    desc: 'Pantau rating GrabFood, GoFood, ShopeeFood harian dalam satu grafik. Outlet mana yang ratingnya turun? Mana yang naik? Botfood listing semuanya — Anda tahu apa yang harus diprioritaskan hari ini.',
    bullets: [
      'Tren daily rating 3 platform sekaligus',
      'Top outlets yang naik atau turun, real-time',
      'Annotated chart: kapan, dari berapa ke berapa',
      'Simpan laporan sebagai file Excel',
    ],
    component: 'MockRating',
  },
  {
    num: '02',
    eyebrow: 'Outlet',
    title: 'Tabel outlet lengkap — filter, sort, drill-down',
    desc: 'Semua outlet × platform dalam satu tabel. Filter mana yang buka/tutup, sort by performa item dari yang terendah, dan langsung cek rating-nya — termasuk yang "belum terbit" (artinya belum ada yang beli).',
    bullets: [
      'Filter by status: Buka / Tutup / Semua',
      'Sort by performa item (% menu aktif)',
      'Rating per outlet — rendah, tinggi, atau belum terbit',
      'Aksi langsung: lihat menu / detail outlet',
    ],
    component: 'MockOutlet',
  },
  {
    num: '03',
    eyebrow: 'Item',
    title: 'Audit menu — 5 masalah yang bikin customer batal beli',
    desc: 'Foto kosong, status mati, harga salah set, diskon coret lepas, atau item lama tidak aktif. Botfood deteksi semua sekaligus — Anda fix sebelum kehilangan order.',
    bullets: [
      'Foto item — kalau kosong, customer skip',
      'Status Aktif vs Mati per platform',
      'Harga salah set (terlalu murah/mahal) — bisa boncos',
      'Diskon coret hilang — harga ketinggian',
      'Terakhir aktif: hitung potential loss kalau lama mati',
    ],
    component: 'MockItem',
  },
  {
    num: '04',
    eyebrow: 'Ulasan',
    title: '120 merchant, satu dashboard ulasan',
    desc: '40 outlet × 3 platform = 120 merchant. Semua ulasan customer dalam satu tempat — yang baik maupun yang buruk. Tandai keluhan, langsung jadi action item buat tim ops untuk berbenah.',
    bullets: [
      'Semua ulasan 120 merchant dalam 1 dashboard',
      'Pelajari review konsumen: good & bad review',
      'Filter cepat: Pesanan Kurang · Stok Habis · ≤ 2 bintang',
      'Tandai komplain → action item buat ops',
      'Simpan laporan sebagai file Excel',
    ],
    component: 'MockUlasan',
  },
]
</script>

<template>
  <section id="fitur" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">4 Fitur Lanjutan</span>
        <h2>Setelah Beranda — <em>fitur lengkap</em> untuk audit & laporan</h2>
        <p>Drill down lebih dalam: tren rating, performa outlet, audit menu, dan dashboard ulasan. Semua dalam satu platform.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 80px;">
        <div
          v-for="(f, i) in features"
          :key="f.num"
          class="feature-row"
          :style="{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'center',
            direction: i % 2 === 1 ? 'rtl' : 'ltr',
          }"
        >
          <div style="direction: ltr;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
              <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: var(--brand); padding: 4px 10px; border: 1px solid var(--border); background: white; border-radius: 999px;">
                / {{ f.num }}
              </div>
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3);">
                {{ f.eyebrow }}
              </div>
            </div>
            <h3 style="font-size: clamp(28px, 3.2vw, 40px); line-height: 1.1; margin-bottom: 16px; text-wrap: balance;">
              {{ f.title }}
            </h3>
            <p style="font-size: 17px; line-height: 1.55; color: var(--ink-2); margin-bottom: 24px; text-wrap: pretty;">
              {{ f.desc }}
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div
                v-for="(b, j) in f.bullets"
                :key="j"
                style="display: flex; align-items: center; gap: 10px; font-size: 15px;"
              >
                <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--bg-tint); color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <IconCheck :size="12" />
                </div>
                <span style="color: var(--ink-2);">{{ b }}</span>
              </div>
            </div>
          </div>
          <div style="direction: ltr; position: relative;">
            <div style="position: absolute; inset: -20px; background: radial-gradient(circle at center, rgba(0,123,27,0.08), transparent 70%); pointer-events: none;" />
            <div style="position: relative;">
              <FeaturesMockRating v-if="f.component === 'MockRating'" />
              <FeaturesMockOutlet v-else-if="f.component === 'MockOutlet'" />
              <FeaturesMockItem v-else-if="f.component === 'MockItem'" />
              <FeaturesMockUlasan v-else-if="f.component === 'MockUlasan'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .feature-row {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 32px !important;
    direction: ltr !important;
  }
}
</style>
