<script setup>
const MANUAL_STEPS = [
  { label: 'Buka aplikasi merchant',            time: 10 },
  { label: 'Cari outlet yang bersangkutan',     time: 20 },
  { label: 'Cek status buka/tutup',             time: 10 },
  { label: 'Scroll menu, cek aktif/nonaktif',   time: 60 },
  { label: 'Cek harga tiap item',               time: 90 },
  { label: 'Buka tab ulasan, baca satu-satu',   time: 90 },
]
const MANUAL_TOTAL_SEC = MANUAL_STEPS.reduce((a, s) => a + s.time, 0)

const BOTFOOD_STEPS = [
  { label: 'Buka dashboard botfood.id',                  time: 5 },
  { label: 'Lihat status semua outlet × 3 platform',     time: 30 },
  { label: 'Klik peringatan (kalau ada)',                time: 60 },
]
const BOTFOOD_TOTAL_SEC = BOTFOOD_STEPS.reduce((a, s) => a + s.time, 0)

const OUTLETS = 40, PLATFORMS = 3
const MANUAL_DAY_MIN = Math.round((MANUAL_TOTAL_SEC * OUTLETS * PLATFORMS) / 60)
const BOTFOOD_DAY_MIN = Math.round(BOTFOOD_TOTAL_SEC / 60)
const multiplier = Math.round(MANUAL_DAY_MIN / BOTFOOD_DAY_MIN)

const formatMin = (m) => {
  if (m < 60) return `${m} menit`
  const h = Math.floor(m / 60)
  const rem = m % 60
  return rem ? `${h} jam ${rem} mnt` : `${h} jam`
}

const FEATURE_COMPARE = [
  { aspect: 'Cakupan platform',           manual: 'Pindah-pindah 3 aplikasi',         botfood: '3 platform dalam 1 layar' },
  { aspect: 'Cakupan outlet',             manual: 'Cek satu per satu',                botfood: 'Semua outlet sekaligus' },
  { aspect: 'Deteksi outlet tutup',       manual: 'Harus inisiatif buka aplikasi',    botfood: 'Otomatis terlihat & ter-alert' },
  { aspect: 'Menu nonaktif / OOS',        manual: 'Scroll & ingat sendiri',           botfood: 'List otomatis per outlet' },
  { aspect: 'Banding harga antar platform', manual: 'Catat manual di Excel',          botfood: 'Comparison bawaan dashboard' },
  { aspect: 'Filter ulasan negatif',      manual: 'Scroll satu-satu',                 botfood: 'Filter bintang, tag, outlet' },
  { aspect: 'Laporan historis',           manual: 'Tidak ada',                        botfood: 'Export Excel / PDF kapan saja' },
  { aspect: 'Risiko data terlewat',       manual: 'Tinggi (mata capek)',              botfood: 'Nol — otomatis 24/7' },
]

const manualMin = Math.floor(MANUAL_TOTAL_SEC / 60)
const manualSec = MANUAL_TOTAL_SEC % 60
const botfoodMin = Math.floor(BOTFOOD_TOTAL_SEC / 60)
const botfoodSec = BOTFOOD_TOTAL_SEC % 60
const botfoodPadSteps = Array(MANUAL_STEPS.length - BOTFOOD_STEPS.length).fill(null)
</script>

<template>
  <section id="perbandingan" class="section" style="background: var(--bg);">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Perbandingan</span>
        <h2>Berapa lama Anda habiskan <em>pantau outlet</em> hari ini?</h2>
        <p>Pantau manual — buka aplikasi, cari outlet, scroll menu, cek harga, baca ulasan. Untuk satu outlet di satu platform saja sudah 5 menit. Bagaimana kalau 40 outlet × 3 platform?</p>
      </div>

      <div class="comp-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 1080px; margin: 0 auto 32px;">
        <!-- Manual card -->
        <div style="background: white; border: 1.5px solid rgba(214, 69, 69, 0.2); border-radius: 20px; padding: 28px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--danger);" />
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(214, 69, 69, 0.12); color: var(--danger); display: flex; align-items: center; justify-content: center;">
              <IconX :size="18" />
            </div>
            <div>
              <div style="font-size: 11px; font-weight: 700; color: var(--ink-3); letter-spacing: 0.06em; text-transform: uppercase;">
                Tanpa Botfood
              </div>
              <div style="font-size: 18px; font-weight: 800; color: var(--ink); line-height: 1.2;">
                Cek manual per outlet
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px;">
            <div
              v-for="(s, i) in MANUAL_STEPS"
              :key="i"
              :style="{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '8px 0',
                borderBottom: i === MANUAL_STEPS.length - 1 ? 'none' : '1px solid #f4f0f0',
                fontSize: '14px',
              }"
            >
              <span style="color: var(--ink-2);">{{ s.label }}</span>
              <span style="font-family: var(--font-mono); font-size: 12px; color: var(--ink-3); font-variant-numeric: tabular-nums;">
                {{ s.time }}s
              </span>
            </div>
          </div>

          <div style="padding: 14px 16px; background: rgba(214, 69, 69, 0.06); border-radius: 12px;">
            <div style="font-size: 11px; color: var(--ink-3); font-weight: 700; margin-bottom: 2px;">
              Total per outlet per platform
            </div>
            <div style="display: inline-flex; align-items: baseline; gap: 4px; font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--danger); font-weight: 700;">
              <span style="font-size: 26px; line-height: 1;">{{ manualMin }}</span>
              <span style="font-size: 13px; opacity: 0.7;">mnt</span>
              <span style="font-size: 18px; margin-left: 4px; line-height: 1;">{{ manualSec.toString().padStart(2, '0') }}</span>
              <span style="font-size: 12px; opacity: 0.7;">dtk</span>
            </div>
          </div>

          <div style="margin-top: 16px; padding: 16px; background: var(--dark); color: white; border-radius: 12px; text-align: center;">
            <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px;">
              × 40 outlet × 3 platform
            </div>
            <div style="font-size: 36px; font-weight: 900; color: #ff7d7d; letter-spacing: -0.02em; line-height: 1; font-family: var(--font-mono); font-variant-numeric: tabular-nums;">
              {{ formatMin(MANUAL_DAY_MIN) }}
            </div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; font-weight: 600;">
              setiap hari
            </div>
          </div>
        </div>

        <!-- Botfood card -->
        <div style="background: white; border: 1.5px solid rgba(0, 123, 27, 0.25); border-radius: 20px; padding: 28px; position: relative; overflow: hidden; box-shadow: 0 16px 40px -16px rgba(0, 123, 27, 0.18);">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--brand);" />
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 38px; height: 38px; border-radius: 10px; background: var(--bg-tint); color: var(--brand); display: flex; align-items: center; justify-content: center;">
              <IconCheck :size="18" />
            </div>
            <div>
              <div style="font-size: 11px; font-weight: 700; color: var(--brand); letter-spacing: 0.06em; text-transform: uppercase;">
                Dengan Botfood
              </div>
              <div style="font-size: 18px; font-weight: 800; color: var(--ink); line-height: 1.2;">
                Dashboard semua outlet
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px;">
            <div
              v-for="(s, i) in BOTFOOD_STEPS"
              :key="i"
              :style="{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '8px 0',
                borderBottom: i === BOTFOOD_STEPS.length - 1 ? 'none' : '1px solid #eef3ef',
                fontSize: '14px',
              }"
            >
              <span style="color: var(--ink-2);">{{ s.label }}</span>
              <span style="font-family: var(--font-mono); font-size: 12px; color: var(--ink-3); font-variant-numeric: tabular-nums;">
                {{ s.time }}s
              </span>
            </div>
            <div
              v-for="(_, i) in botfoodPadSteps"
              :key="`pad-${i}`"
              style="padding: 8px 0; font-size: 14px; color: transparent;"
            >
              &nbsp;
            </div>
          </div>

          <div style="padding: 14px 16px; background: var(--bg-tint); border-radius: 12px;">
            <div style="font-size: 11px; color: var(--ink-3); font-weight: 700; margin-bottom: 2px;">
              Total untuk semua outlet & platform
            </div>
            <div style="display: inline-flex; align-items: baseline; gap: 4px; font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--brand); font-weight: 700;">
              <span style="font-size: 26px; line-height: 1;">{{ botfoodMin }}</span>
              <span style="font-size: 13px; opacity: 0.7;">mnt</span>
              <span style="font-size: 18px; margin-left: 4px; line-height: 1;">{{ botfoodSec.toString().padStart(2, '0') }}</span>
              <span style="font-size: 12px; opacity: 0.7;">dtk</span>
            </div>
          </div>

          <div style="margin-top: 16px; padding: 16px; background: var(--brand); color: white; border-radius: 12px; text-align: center;">
            <div style="font-size: 11px; color: rgba(255,255,255,0.85); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px;">
              Sekali pantau
            </div>
            <div style="font-size: 36px; font-weight: 900; color: white; letter-spacing: -0.02em; line-height: 1; font-family: var(--font-mono); font-variant-numeric: tabular-nums;">
              {{ formatMin(BOTFOOD_DAY_MIN) }}
            </div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.85); margin-top: 4px; font-weight: 700;">
              ≈ {{ multiplier }}× lebih cepat
            </div>
          </div>
        </div>
      </div>

      <!-- Feature comparison table -->
      <div style="background: white; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; max-width: 1080px; margin: 0 auto;">
        <div class="comp-row" style="display: grid; grid-template-columns: 1.1fr 1fr 1fr; padding: 14px 24px; background: var(--bg-tint); border-bottom: 1px solid var(--border); font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-3);">
          <div>Aspek</div>
          <div style="display: flex; align-items: center; gap: 8px; color: var(--danger);">
            <IconX :size="14" /> Manual
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: var(--brand);">
            <IconCheck :size="14" /> Botfood
          </div>
        </div>
        <div
          v-for="(row, i) in FEATURE_COMPARE"
          :key="i"
          class="comp-row"
          :style="{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr 1fr',
            padding: '16px 24px',
            borderBottom: i === FEATURE_COMPARE.length - 1 ? 'none' : '1px solid #f4f8f4',
            fontSize: '14px',
            alignItems: 'center',
          }"
        >
          <div style="font-weight: 700; color: var(--ink);">{{ row.aspect }}</div>
          <div style="color: var(--ink-2);">
            <span class="comp-mobile-label">Manual: </span>{{ row.manual }}
          </div>
          <div style="color: var(--ink); font-weight: 600;">
            <span class="comp-mobile-label" style="color: var(--brand);">Botfood: </span>{{ row.botfood }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comp-mobile-label { display: none; }
@media (max-width: 820px) {
  .comp-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
}
@media (max-width: 720px) {
  .comp-row {
    grid-template-columns: 1fr !important;
    padding: 16px 18px !important;
    gap: 6px !important;
  }
  .comp-row > div:first-child {
    font-size: 15px !important;
    margin-bottom: 4px;
  }
  .comp-mobile-label {
    display: inline;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-right: 4px;
    opacity: 0.7;
  }
  .comp-row:first-child { display: none !important; }
}
</style>
