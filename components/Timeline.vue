<script setup>
import { WA_HREF } from '~/composables/useConstants'

// Mini visual components — defined inline for simplicity since each is small

const steps = [
  {
    day: 'Day -1',
    title: 'Perkenalan',
    desc: 'Hubungi tim Botfood untuk perkenalan singkat. Kami setup jadwal meeting online untuk jelajahi fitur Botfood. Anda share daftar outlet & link aplikasi (GrabFood, GoFood, ShopeeFood) untuk persiapan free trial.',
    note: 'Tip: kalau ingin langsung mulai, bisa pakai dummy brand existing untuk demo lebih cepat.',
    color: 'var(--ink-2)',
    accent: 'var(--bg-tint)',
    visual: 'wa',
  },
  {
    day: 'Day 0',
    title: 'Meeting & demo dashboard',
    desc: 'Meet online bersama tim Botfood. Kami pandu eksplorasi semua fitur — Monitor, Rating, Outlet, Item, Ulasan. Anda dapat akses free trial dashboard di akhir meeting.',
    color: 'var(--brand)',
    accent: 'rgba(0, 123, 27, 0.08)',
    visual: 'meet',
  },
  {
    day: 'Day 1-7',
    title: 'Free trial 7 hari',
    desc: 'Anda dan tim ops eksplor dashboard di lapangan. Pantau outlet pertama, deteksi masalah pertama. Tim Botfood standby di WhatsApp untuk pertanyaan apapun selama trial.',
    color: 'var(--brand)',
    accent: 'rgba(0, 123, 27, 0.08)',
    highlight: true,
    visual: 'dashboard',
  },
  {
    day: 'Day 8',
    title: 'Decision time',
    desc: 'Setelah free trial, Anda putuskan: lanjut atau stop. Kalau lanjut — kami share Google Sheet untuk rekonsiliasi outlet: yang ingin Anda daftarkan vs yang sudah onboard di Botfood. Memastikan tidak ada yang terlewat.',
    color: 'var(--brand)',
    accent: 'rgba(0, 123, 27, 0.08)',
    visual: 'sheet',
  },
  {
    day: 'Day 9+',
    title: 'Onboard outlet sisanya · go-live',
    desc: 'Tim Botfood onboard outlet yang belum masuk (kalau ada). Go-live dihitung sejak semua outlet Anda sudah ter-onboard dengan benar.',
    color: 'var(--brand)',
    accent: 'rgba(0, 123, 27, 0.08)',
    visual: 'golive',
  },
  {
    day: 'Day 30',
    title: 'Invoice pertama',
    desc: 'Di akhir bulan, kami terbitkan invoice sesuai jumlah outlet aktif. Tanpa biaya tersembunyi. Selanjutnya: pantau outlet Anda setiap hari hanya dengan beberapa klik.',
    color: 'var(--ink)',
    accent: 'var(--dark)',
    invoiceCard: true,
    visual: 'invoice',
  },
]
</script>

<template>
  <section id="timeline" class="section" style="background: white;">
    <div class="container" style="max-width: 980px;">
      <div class="section-head">
        <span class="eyebrow">Proses & Timeline</span>
        <h2>Bagaimana cara <em>mulai pakai</em> Botfood?</h2>
        <p>Dari kontak pertama sampai invoice pertama — semua langkah, semua ekspektasi waktu. Tanpa kejutan.</p>
      </div>

      <!-- Online callout -->
      <div style="display: flex; justify-content: center; margin-bottom: 40px;">
        <div style="display: inline-flex; align-items: center; gap: 14px; padding: 12px 20px; background: var(--bg-tint); border: 1px solid var(--border-strong); border-radius: 999px; max-width: 100%;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--brand); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 11H4L5 9z" />
            </svg>
          </div>
          <div style="font-size: 14px; color: var(--ink); text-wrap: pretty;">
            <strong style="color: var(--brand);">100% online</strong> — semua langkah dilakukan via meeting online, WhatsApp, dan Google Sheet. Tidak perlu kunjungan ke kantor Anda. Waktu Anda tetap efisien.
          </div>
        </div>
      </div>

      <div class="timeline-container" style="position: relative; padding-left: 8px;">
        <div
          class="timeline-line"
          style="position: absolute; left: 31px; top: 16px; bottom: 16px; width: 2px; background: linear-gradient(to bottom, var(--border-strong) 0%, var(--brand) 12%, var(--brand) 92%, var(--border-strong) 100%); border-radius: 2px;"
        />

        <div
          v-for="(step, i) in steps"
          :key="i"
          class="timeline-step"
          :style="{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '64px 1fr',
            gap: '24px',
            marginBottom: i === steps.length - 1 ? '0' : '24px',
            alignItems: 'start',
          }"
        >
          <!-- Dot -->
          <div style="width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative;">
            <div
              :style="{
                width: step.highlight ? '28px' : '22px',
                height: step.highlight ? '28px' : '22px',
                borderRadius: '50%',
                background: step.highlight ? 'var(--brand)' : 'white',
                border: `3px solid ${step.color === 'var(--ink-2)' ? 'var(--border-strong)' : step.color}`,
                boxShadow: step.highlight ? '0 0 0 6px rgba(0, 123, 27, 0.12)' : '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all .2s',
                zIndex: 2,
                position: 'relative',
              }"
            >
              <div v-if="step.highlight" style="position: absolute; inset: 4px; border-radius: 50%; background: white;" />
            </div>
          </div>

          <!-- Content + visual -->
          <div
            class="timeline-card"
            :style="{
              background: step.invoiceCard ? 'var(--dark)' : 'white',
              color: step.invoiceCard ? 'white' : 'inherit',
              border: step.invoiceCard
                ? '1px solid rgba(255,255,255,0.06)'
                : (step.highlight ? '1.5px solid rgba(0, 123, 27, 0.25)' : '1px solid var(--border)'),
              borderRadius: '16px',
              padding: '22px 26px',
              boxShadow: step.highlight ? '0 12px 32px -16px rgba(0, 123, 27, 0.18)' : 'none',
              display: 'grid',
              gridTemplateColumns: '1fr 200px',
              gap: '24px',
              alignItems: 'stretch',
            }"
          >
            <div style="display: flex; flex-direction: column;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 8px; flex-wrap: wrap;">
                <h3 :style="{
                  fontSize: '19px', lineHeight: 1.25,
                  color: step.invoiceCard ? 'white' : 'var(--ink)',
                  letterSpacing: '-0.01em',
                }">
                  {{ step.title }}
                </h3>
                <span :style="{
                  fontSize: '11px', fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: step.invoiceCard
                    ? 'rgba(255,255,255,0.1)'
                    : (step.highlight ? 'var(--brand)' : step.accent),
                  color: step.invoiceCard
                    ? 'rgba(255,255,255,0.85)'
                    : (step.highlight ? 'white' : step.color),
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                }">
                  {{ step.day }}
                </span>
              </div>
              <p :style="{
                fontSize: '15px', lineHeight: 1.55,
                color: step.invoiceCard ? 'rgba(255,255,255,0.72)' : 'var(--ink-2)',
                textWrap: 'pretty',
              }">
                {{ step.desc }}
              </p>
              <div
                v-if="step.note"
                style="margin-top: 12px; padding: 10px 14px; background: var(--bg-tint); border-radius: 10px; font-size: 13px; color: var(--brand); font-weight: 600; display: flex; gap: 8px; align-items: flex-start;"
              >
                <span style="flex-shrink: 0; margin-top: 1px;">💡</span>
                <span style="line-height: 1.45;">{{ step.note }}</span>
              </div>
            </div>
            <div class="timeline-visual" style="width: 200px; height: 140px; flex-shrink: 0;">
              <TimelineVisual :variant="step.visual" />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div style="margin-top: 36px; text-align: center;">
        <a :href="WA_HREF" target="_blank" rel="noopener" class="btn btn-primary">
          Mulai dari Day -1 sekarang
          <IconArrow :size="14" />
        </a>
        <div style="margin-top: 12px; font-size: 13px; color: var(--ink-3);">
          Discovery call 15-30 menit · tanpa komitmen
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 820px) {
  .timeline-card { grid-template-columns: 1fr !important; gap: 16px !important; }
  .timeline-visual { width: 100% !important; height: 130px !important; }
}
@media (max-width: 720px) {
  .timeline-step { grid-template-columns: 44px 1fr !important; gap: 14px !important; }
  .timeline-line { left: 21px !important; }
  .timeline-step > div:first-child { width: 44px !important; height: 44px !important; }
  .timeline-card { padding: 18px 20px !important; }
}
</style>
