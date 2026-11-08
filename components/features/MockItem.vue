<script setup>
const photoPalettes = {
  cream: 'linear-gradient(135deg, #f6e7c1, #e8c875)',
  choco: 'linear-gradient(135deg, #5a3a1f, #8b6342)',
  bread: 'linear-gradient(135deg, #d9a86b, #c08a4a)',
  cake:  'linear-gradient(135deg, #fce0e0, #e8a8a8)',
  green: 'linear-gradient(135deg, #c4e3b0, #8eb872)',
}

const photoStyle = (variant) => photoPalettes[variant] || photoPalettes.bread

const items = [
  { name: 'ROTI ABON', outlet: 'MyFoodBrand, Cikole',  status: 'aktif',  price: 13000, sale: null,  last: '—',           photo: null,    issue: 'no-photo' },
  { name: 'COOKIES N CREAM 16', outlet: 'MyFoodBrand, Cikole', status: 'mati', price: 189000, sale: null, last: '17 Mei, 18:18', photo: 'cream',  issue: 'mati' },
  { name: 'NASI GORENG', outlet: 'MyFoodBrand, Sudirman', status: 'aktif', price: 5000,  sale: null,  last: '—',           photo: 'bread',  issue: 'price-wrong' },
  { name: 'LAPIS TALAS FULL TALAS', outlet: 'MyFoodBrand, Dramaga', status: 'aktif', price: 53500, sale: null, last: '—', photo: 'green', issue: 'no-discount' },
  { name: 'BOLU PISANG ORIGINAL',  outlet: 'MyFoodBrand, Dramaga', status: 'aktif', price: 46500, sale: 34875, last: '—', photo: 'cake', issue: null },
  { name: 'ROTI GULUNG ABON', outlet: 'MyFoodBrand, Cikole', status: 'mati', price: 15500, sale: null, last: '17 Mei, 11:48', photo: 'choco', issue: 'mati' },
]

const issueBadge = {
  'no-photo':    { label: '!',  color: '#c53131', bg: 'rgba(214,69,69,0.15)'  },
  'mati':        { label: '✕',  color: '#c53131', bg: 'rgba(214,69,69,0.15)'  },
  'price-wrong': { label: 'Rp', color: '#c53131', bg: 'rgba(214,69,69,0.15)'  },
  'no-discount': { label: '%',  color: '#e6a411', bg: 'rgba(230,164,17,0.18)' },
}

const fmtPrice = (n) => 'Rp ' + n.toLocaleString('id-ID')

const summaryChips = [
  { label: '2 tanpa foto',   color: '#c53131' },
  { label: '2 tidak aktif',  color: '#c53131' },
  { label: '1 cek harga',    color: '#c53131' },
  { label: '1 belum diskon', color: '#e6a411' },
]
</script>

<template>
  <div style="background: white; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow-md); padding: 16px;">
    <!-- Filter bar -->
    <div style="display: grid; grid-template-columns: 1fr 0.9fr 0.9fr; gap: 6px; margin-bottom: 12px;">
      <div style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 10px; color: var(--ink-3); display: flex; align-items: center; gap: 6px;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        Nama item
      </div>
      <div style="padding: 6px 10px; border: 1.5px solid var(--brand); border-radius: 8px; font-size: 10px; color: var(--brand); font-weight: 800; display: flex; align-items: center; justify-content: space-between; background: var(--bg-tint);">
        Aktif/Mati <span>▾</span>
      </div>
      <div style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 10px; color: var(--ink-2); font-weight: 700; display: flex; align-items: center; justify-content: space-between;">
        Platform <span style="color: var(--ink-3);">▾</span>
      </div>
    </div>

    <!-- Issue summary -->
    <div style="display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap;">
      <span
        v-for="(b, i) in summaryChips"
        :key="i"
        :style="{
          fontSize: '9px', fontWeight: 700,
          padding: '3px 7px', borderRadius: '999px',
          background: b.color === '#c53131' ? 'rgba(214,69,69,0.1)' : 'rgba(230,164,17,0.12)',
          color: b.color,
          whiteSpace: 'nowrap',
        }"
      >
        {{ b.label }}
      </span>
    </div>

    <!-- Rows -->
    <div
      v-for="(item, i) in items"
      :key="i"
      :style="{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '8px 0',
        borderBottom: i === items.length - 1 ? 'none' : '1px solid #f2f5f2',
        opacity: item.status === 'mati' ? 0.7 : 1,
      }"
    >
      <!-- Photo -->
      <div style="position: relative; flex-shrink: 0;">
        <div v-if="item.photo" :style="{
          width: '36px', height: '36px', borderRadius: '7px',
          background: photoStyle(item.photo),
          border: '1px solid rgba(0,0,0,0.06)',
          filter: item.status === 'mati' ? 'grayscale(60%)' : 'none',
        }" />
        <div v-else style="width: 36px; height: 36px; border-radius: 7px; background: repeating-linear-gradient(135deg, #f2f0eb 0 4px, #e5e2d8 4px 8px); border: 1.5px dashed #c53131; display: flex; align-items: center; justify-content: center; color: #c53131; font-size: 9px; font-weight: 800;">
          📷
        </div>
        <span
          v-if="item.issue"
          :style="{
            position: 'absolute', top: '-4px', right: '-4px',
            width: '16px', height: '16px', borderRadius: '50%',
            background: issueBadge[item.issue].bg,
            color: issueBadge[item.issue].color,
            border: '2px solid white',
            fontSize: '9px', fontWeight: 900,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1,
          }"
        >
          {{ issueBadge[item.issue].label }}
        </span>
      </div>

      <!-- Name + outlet -->
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 11px; font-weight: 700; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.02em;">
          {{ item.name }}
        </div>
        <div style="font-size: 9px; color: var(--ink-3); display: flex; align-items: center; gap: 4px;">
          <IconGo :size="10" />
          {{ item.outlet }}
        </div>
      </div>

      <!-- Status -->
      <span :style="{
        fontSize: '9px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
        padding: '2px 7px', borderRadius: '999px',
        background: item.status === 'mati' ? 'rgba(214,69,69,0.14)' : 'rgba(26,154,53,0.14)',
        color: item.status === 'mati' ? '#c53131' : '#137f2b',
        flexShrink: 0,
      }">
        {{ item.status === 'mati' ? 'Mati' : 'Aktif' }}
      </span>

      <!-- Price -->
      <div class="mock-item-price" style="text-align: right; min-width: 78px; flex-shrink: 0; font-family: var(--font-mono); font-variant-numeric: tabular-nums;">
        <template v-if="item.sale">
          <div style="font-size: 9px; color: var(--ink-3); text-decoration: line-through;">
            {{ fmtPrice(item.price) }}
          </div>
          <div style="font-size: 11px; font-weight: 800; color: var(--ok);">
            {{ fmtPrice(item.sale) }}
          </div>
        </template>
        <div v-else :style="{
          fontSize: '11px', fontWeight: 800,
          color: item.issue === 'price-wrong' ? '#c53131' : 'var(--ink)',
          background: item.issue === 'price-wrong' ? 'rgba(214,69,69,0.08)' : 'transparent',
          padding: item.issue === 'price-wrong' ? '2px 6px' : 0,
          borderRadius: item.issue === 'price-wrong' ? '4px' : 0,
          display: 'inline-block',
        }">
          {{ fmtPrice(item.price) }}
        </div>
      </div>

      <!-- Last active -->
      <div class="mock-item-last" style="font-size: 9px; color: var(--ink-3); font-family: var(--font-mono); text-align: right; min-width: 76px; white-space: nowrap; flex-shrink: 0;">
        <span v-if="item.last === '—'">—</span>
        <span v-else style="color: #c53131; font-weight: 700;">{{ item.last }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 480px) {
  .mock-item-last { display: none !important; }
  .mock-item-price { min-width: 0 !important; }
}
</style>
