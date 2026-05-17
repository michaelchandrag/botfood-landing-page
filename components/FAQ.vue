<script setup>
import { WA_HREF } from '~/composables/useConstants'

const items = [
  {
    q: 'Berapa lama setup outlet baru di Botfood?',
    a: 'Cukup 1-2 hari kerja. Anda submit daftar outlet beserta link GrabFood, GoFood, dan ShopeeFood yang ingin dipantau — tim kami yang setup semuanya. Anda tidak perlu install apapun.',
  },
  {
    q: 'Apakah ada free trial?',
    a: 'Ya — free trial 7 hari, Anda bisa daftarkan sampai 10-15 outlet untuk mencoba. Tanpa kartu kredit, tanpa kontrak. Cocok untuk membuktikan nilai Botfood di outlet Anda sendiri.',
  },
  {
    q: 'Bagaimana skema pembayaran setelah free trial?',
    a: 'Subscription bulanan, dihitung berdasarkan jumlah outlet yang Anda pantau di Botfood. Di akhir setiap bulan, kami terbitkan invoice sesuai jumlah outlet aktif. Tidak ada biaya setup, tidak ada kontrak panjang.',
  },
  {
    q: 'Bagaimana kalau saya tidak puas — bisa cancel kapan saja?',
    a: 'Kalau Anda tidak puas, Anda tidak perlu bayar. Filosofi kami: Botfood tumbuh bersama klien. Kalau Botfood tidak berguna untuk Anda, tidak perlu bayar. Hubungi tim Botfood kapan saja, akses akan kami nonaktifkan langsung.',
  },
  {
    q: 'Apakah ada batas minimum atau maksimum outlet?',
    a: 'Tidak ada batas maksimum — Anda bisa onboard berapa pun outlet ke Botfood. Bayar hanya untuk outlet yang aktif di dashboard, meski di lapangan Anda punya lebih banyak.',
  },
  {
    q: 'Botfood cocok untuk siapa? Apakah single outlet juga bisa?',
    a: 'Botfood paling cocok untuk brand dengan minimum 3 outlet yang aktif di GrabFood, GoFood, dan ShopeeFood. Single outlet biasanya belum butuh sistem monitoring — Botfood dirancang untuk yang sudah multi-outlet dan multi-platform.',
  },
  {
    q: 'Apakah saya perlu memberikan akses login akun merchant saya?',
    a: 'Tidak. Botfood memantau dari sudut pandang customer — mengakses tampilan publik di aplikasi GrabFood, GoFood, dan ShopeeFood. Data login merchant Anda tetap aman di Anda.',
  },
  {
    q: 'Apakah data outlet saya aman? Bisa dibagi ke kompetitor?',
    a: 'Tidak. Data outlet Anda tidak akan disebarluaskan ke kompetitor atau pihak ketiga. Privasi data klien adalah komitmen utama Botfood.',
  },
  {
    q: 'Seberapa akurat data Botfood? Berapa sering refresh?',
    a: 'Data Botfood ter-update setiap 0-30 menit. Kalau sistem kami down lebih dari 6 jam, bulan tersebut digratiskan — ini SLA (Service Level Agreement) kami.',
  },
  {
    q: 'Bisa diakses dari mana saja?',
    a: 'Botfood tersedia di website (botfood.id) dan aplikasi mobile Android & iOS. Website cocok untuk tim back office — admin, ops manager, owner — yang butuh data detail, analisis perfoma, dan monitor semua outlet sekaligus. Aplikasi mobile cocok untuk tim lapangan yang sering di jalan, butuh notifikasi instan dan akses cepat dari HP.',
  },
  {
    q: 'Bagaimana saya menerima notifikasi kalau outlet bermasalah?',
    a: 'Lewat dashboard website Botfood dan notifikasi push di aplikasi mobile. Tim kami juga akan bantu setup workflow notifikasi sesuai kebutuhan operasional Anda.',
  },
]

const openIdx = ref(0)

const toggle = (i) => {
  openIdx.value = openIdx.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="section" style="background: white;">
    <div class="container" style="max-width: 880px;">
      <div class="faq-grid" style="display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px; align-items: start;">
        <div>
          <span class="eyebrow">FAQ</span>
          <h2 style="font-size: clamp(28px, 3.4vw, 42px); line-height: 1.1; margin-top: 16px; text-wrap: balance; letter-spacing: -0.02em;">
            Pertanyaan yang <em style="font-style: normal; color: var(--brand);">sering ditanyakan</em>
          </h2>
          <p style="font-size: 16px; color: var(--ink-2); line-height: 1.55; margin-top: 16px; margin-bottom: 24px; text-wrap: pretty;">
            Belum yakin? Jawaban singkat untuk pertanyaan paling umum dari calon klien.
          </p>
          <a :href="WA_HREF" target="_blank" rel="noopener" class="btn btn-ghost" style="font-size: 14px;">
            Masih ada pertanyaan?
            <IconArrow :size="14" />
          </a>
        </div>
        <div>
          <div
            v-for="(item, i) in items"
            :key="i"
            style="border-bottom: 1px solid var(--border); transition: all .2s ease;"
          >
            <button
              @click="toggle(i)"
              style="width: 100%; padding: 22px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; text-align: left; cursor: pointer;"
            >
              <span :style="{
                fontSize: '18px', fontWeight: 700,
                color: openIdx === i ? 'var(--brand)' : 'var(--ink)',
                lineHeight: 1.3,
                transition: 'color .2s',
              }">
                {{ item.q }}
              </span>
              <span :style="{
                flexShrink: 0,
                width: '36px', height: '36px', borderRadius: '50%',
                background: openIdx === i ? 'var(--brand)' : 'var(--bg-tint)',
                color: openIdx === i ? 'white' : 'var(--brand)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all .2s ease',
                transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0)',
              }">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div :style="{
              maxHeight: openIdx === i ? '400px' : '0',
              overflow: 'hidden',
              transition: 'max-height .3s ease',
            }">
              <p style="font-size: 16px; line-height: 1.6; color: var(--ink-2); padding-bottom: 24px; max-width: 760px; text-wrap: pretty;">
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 820px) {
  .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
}
</style>
