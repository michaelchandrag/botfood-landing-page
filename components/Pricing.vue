<script setup>
import { WA_HREF } from '~/composables/useConstants'

const tiers = [
  {
    id: 'standard',
    badge: 'Untuk ≤10 outlet',
    name: 'Per outlet',
    price: 'Rp 100.000',
    suffix: '/ bulan / outlet',
    desc: 'Harga simpel — bayar sesuai jumlah outlet yang Anda pantau di Botfood. Pas untuk brand yang baru mulai scale operasi online.',
    features: [
      '5 fitur utama: Monitor, Rating, Outlet, Item, Ulasan',
      'Akses web dashboard + aplikasi mobile (Android & iOS)',
      'Pantau 3 platform: GrabFood, GoFood, ShopeeFood',
      'Free trial 7 hari',
      'Laporan Excel & PDF',
      'Tanpa kontrak — bisa stop kapan saja',
    ],
    cta: 'Mulai Free Trial 7 Hari',
    highlight: false,
  },
  {
    id: 'custom',
    badge: 'Untuk >10 outlet atau multi-brand',
    name: 'Custom',
    price: 'Hubungi kami',
    suffix: 'untuk quotation',
    desc: 'Untuk operasi yang lebih besar — multi-brand atau lebih dari 10 outlet. Kami sesuaikan harga, workflow, dan support sesuai skala Anda.',
    features: [
      'Semua yang ada di paket Per outlet',
      'Dashboard konsolidasi multi-brand',
      'Workflow notifikasi custom',
      'Dedicated onboarding team',
      'Priority support',
      'SLA: data update 0-30 menit · gratis kalau down >6 jam',
    ],
    cta: 'Hubungi Sales',
    highlight: true,
  },
]
</script>

<template>
  <section id="harga" class="section" style="background: var(--bg);">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Harga</span>
        <h2>Harga <em>simpel</em>, tumbuh bersama Anda</h2>
        <p>Mulai dari satu outlet hingga ratusan multi-brand. Bayar sesuai yang Anda pakai — tanpa kontrak, tanpa hidden cost.</p>
      </div>

      <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 920px; margin: 0 auto;">
        <div
          v-for="t in tiers"
          :key="t.id"
          :style="{
            background: 'white',
            border: t.highlight ? '2px solid var(--brand)' : '1px solid var(--border)',
            borderRadius: '22px',
            padding: '32px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: t.highlight
              ? '0 30px 60px -24px rgba(0, 123, 27, 0.25), 0 12px 28px -16px rgba(0, 123, 27, 0.18)'
              : '0 4px 12px rgba(12, 32, 14, 0.04)',
          }"
        >
          <div
            v-if="t.highlight"
            style="position: absolute; top: -14px; left: 32px; padding: 6px 14px; background: var(--brand); color: white; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;"
          >
            Paling banyak dipilih
          </div>

          <div style="margin-bottom: 24px;">
            <span style="display: inline-block; font-size: 11px; font-weight: 700; padding: 4px 10px; background: var(--bg-tint); color: var(--brand); border-radius: 999px; letter-spacing: 0.04em; margin-bottom: 14px;">
              {{ t.badge }}
            </span>
            <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--ink);">
              {{ t.name }}
            </h3>
            <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
              <span :style="{
                fontSize: t.price.length > 8 ? '30px' : '42px',
                fontWeight: 900,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }">
                {{ t.price }}
              </span>
              <span style="font-size: 14px; font-weight: 600; color: var(--ink-3);">
                {{ t.suffix }}
              </span>
            </div>
            <p style="font-size: 14px; color: var(--ink-2); line-height: 1.5; margin-top: 14px; text-wrap: pretty;">
              {{ t.desc }}
            </p>
          </div>

          <div style="height: 1px; background: var(--border); margin: 4px 0 24px;" />

          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; flex: 1;">
            <div
              v-for="(f, i) in t.features"
              :key="i"
              style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;"
            >
              <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--bg-tint); color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;">
                <IconCheck :size="12" />
              </div>
              <span style="color: var(--ink-2); line-height: 1.45;">{{ f }}</span>
            </div>
          </div>

          <a
            :href="WA_HREF"
            target="_blank"
            rel="noopener"
            :class="t.highlight ? 'btn btn-primary' : 'btn btn-ghost'"
            style="justify-content: center; padding: 14px 22px;"
          >
            {{ t.cta }}
            <IconArrow :size="14" />
          </a>
        </div>
      </div>

      <div style="margin-top: 36px; text-align: center; display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; font-size: 13px; color: var(--ink-3); font-weight: 600;">
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          <IconCheck :size="14" /> Free trial 7 hari
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          <IconCheck :size="14" /> Tanpa kartu kredit
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          <IconCheck :size="14" /> Tidak puas? Tidak bayar.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 820px) {
  .pricing-grid {
    grid-template-columns: 1fr !important;
    max-width: 480px !important;
  }
}
</style>
