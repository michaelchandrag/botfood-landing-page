<script setup>
const reviews = [
  {
    stars: 1, p: 'grab', outlet: 'MyFoodBrand, Cipayung',
    item: 'CHOCO MELTED MIKA',
    text: 'maaf kak. krim cake nya kyk uda tengik. trs cake nya spt pake rum ya??',
    tag: 'Rasa', urgent: true, flagged: true,
  },
  {
    stars: 5, p: 'go', outlet: 'MyFoodBrand, Bangbarung',
    item: 'BOLU PISANG ORIGINAL',
    text: 'I like the taste and the moist feeling. Just the right texture — neither too dry nor too wet.',
    tag: ['Rasa', 'Kualitas'],
  },
  {
    stars: 2, p: 'grab', outlet: 'MyFoodBrand, Cibubur',
    item: 'BOLU VANILA',
    text: 'pesen lapis talas original diganti bolu, kalo ga ada di cancel! jangan ngerugiin orang lain',
    tag: 'Pesanan Kurang', urgent: true, flagged: true,
  },
  {
    stars: 5, p: 'shopee', outlet: 'MyFoodBrand, Baros',
    item: 'BOLU PANDAN',
    text: 'bolu nya lembut dan rasa nya selalu enak',
    tag: 'Rasa',
  },
]

const tagFilters = [
  { label: 'Pesanan Kurang', active: false },
  { label: 'Stok Habis', active: false },
  { label: 'Tidak Sesuai', active: false },
  { label: '★ ≤ 2', active: true },
  { label: 'Harga', active: false },
]

const tagArray = (t) => Array.isArray(t) ? t : [t]
</script>

<template>
  <div style="background: white; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow-md); padding: 16px;">
    <!-- Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <div>
        <div style="font-size: 13px; font-weight: 800;">Ulasan · 120 merchant</div>
        <div style="font-size: 10px; color: var(--ink-3);">40 outlet × 3 platform · 1 dashboard</div>
      </div>
      <button style="padding: 5px 10px; font-size: 11px; font-weight: 700; background: var(--bg-tint); color: var(--brand); border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; gap: 5px;">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        </svg>
        Excel
      </button>
    </div>

    <!-- Filter chips -->
    <div style="display: flex; gap: 5px; margin-bottom: 12px; flex-wrap: wrap;">
      <span
        v-for="(t, i) in tagFilters"
        :key="i"
        :style="{
          fontSize: '9px', fontWeight: 700,
          padding: '3px 8px', borderRadius: '999px',
          border: t.active ? '1.5px solid var(--brand)' : '1px solid var(--border)',
          background: t.active ? 'var(--brand)' : 'white',
          color: t.active ? 'white' : 'var(--ink-2)',
        }"
      >
        {{ t.label }}
      </span>
    </div>

    <!-- Reviews -->
    <div style="display: flex; flex-direction: column; gap: 6px;">
      <div
        v-for="(r, i) in reviews"
        :key="i"
        :style="{
          padding: '10px',
          border: r.urgent ? '1.5px solid rgba(214,69,69,0.3)' : '1px solid #f0f3f0',
          background: r.urgent ? 'rgba(214,69,69,0.04)' : 'white',
          borderRadius: '10px',
          display: 'flex', flexDirection: 'column', gap: '6px',
          position: 'relative',
        }"
      >
        <!-- Top row -->
        <div style="display: flex; align-items: center; gap: 6px; font-size: 10px;">
          <PlatformIcon :name="r.p" :size="14" />
          <div style="display: inline-flex; gap: 1px;">
            <svg
              v-for="n in 5" :key="n"
              width="11" height="11" viewBox="0 0 24 24"
              :fill="n <= r.stars ? '#e6a411' : '#e8ede8'"
            >
              <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span style="font-weight: 800; color: var(--ink); font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; letter-spacing: 0.02em;">
            {{ r.item }}
          </span>
          <span :style="{
            width: '18px', height: '18px', borderRadius: '4px',
            border: r.flagged ? '2px solid var(--danger)' : '1.5px solid var(--border-strong)',
            background: r.flagged ? 'var(--danger)' : 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, color: 'white',
          }">
            <IconCheck v-if="r.flagged" :size="10" />
          </span>
        </div>

        <div style="font-size: 9px; color: var(--ink-3); display: flex; align-items: center; gap: 4px;">
          {{ r.outlet }}
        </div>

        <div :style="{
          fontSize: '11px', lineHeight: 1.4,
          color: r.urgent ? '#c53131' : 'var(--ink-2)',
          fontStyle: 'italic',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }">
          "{{ r.text }}"
        </div>

        <div v-if="r.tag" style="display: flex; gap: 4px; flex-wrap: wrap;">
          <span
            v-for="(t, j) in tagArray(r.tag)"
            :key="j"
            :style="{
              fontSize: '9px', fontWeight: 700,
              padding: '2px 7px', borderRadius: '999px',
              background: r.urgent ? 'rgba(214,69,69,0.12)' : 'var(--bg-tint)',
              color: r.urgent ? '#c53131' : 'var(--brand)',
            }"
          >
            {{ t }}
          </span>
          <span
            v-if="r.urgent"
            style="font-size: 9px; font-weight: 800; padding: 2px 7px; border-radius: 999px; background: #c53131; color: white; margin-left: auto; display: inline-flex; align-items: center; gap: 3px;"
          >
            Ditandai · ops follow up
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
