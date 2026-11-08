<script setup>
const items = [
  { name: 'ROTI ABON AYAM ORI',  status: ['aktif', 'mati', 'mati'] },
  { name: 'ROTI CHEESE PIZZA',   status: ['aktif', 'mati', 'mati'] },
  { name: 'ROTI GULUNG ABON',    status: ['aktif', 'mati', 'mati'] },
  { name: 'BOLU PISANG ORIGINAL', status: ['mati', 'mati', 'aktif'] },
]

const pillBg = (s) => s === 'aktif' ? 'rgba(26, 154, 53, 0.14)' : 'rgba(214, 69, 69, 0.14)'
const pillFg = (s) => s === 'aktif' ? '#137f2b' : '#c53131'
</script>

<template>
  <DashboardMockCard glow="#e6a411">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
      <div style="width: 34px; height: 34px; border-radius: 10px; background: rgba(230, 164, 17, 0.14); color: #a67a0b; display: flex; align-items: center; justify-content: center;">
        <IconAlert :size="18" />
      </div>
      <div>
        <div style="font-size: 14px; font-weight: 800; color: #a67a0b;">119 Item Tidak Seragam!</div>
        <div style="font-size: 11px; color: var(--ink-3);">MyFoodBrand, Sudirman · status beda antar platform</div>
      </div>
    </div>

    <!-- Header -->
    <div style="display: grid; grid-template-columns: 1.5fr 0.8fr 0.8fr 0.8fr; padding: 8px 10px; gap: 6px; background: var(--bg-tint); border-radius: 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px;">
      <div>Nama Item</div>
      <div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
        <IconGo :size="12" /> Go
      </div>
      <div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
        <IconGrab :size="12" /> Grab
      </div>
      <div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
        <IconShopee :size="12" /> Shopee
      </div>
    </div>

    <div
      v-for="(item, i) in items"
      :key="item.name"
      :style="{
        display: 'grid',
        gridTemplateColumns: '1.5fr 0.8fr 0.8fr 0.8fr',
        padding: '10px',
        gap: '6px',
        alignItems: 'center',
        background: i === 0 ? 'rgba(230, 164, 17, 0.04)' : 'transparent',
        borderRadius: i === 0 ? '8px' : 0,
        border: i === 0 ? '1.5px dashed rgba(230, 164, 17, 0.4)' : 'none',
        borderBottom: i === 0
          ? '1.5px dashed rgba(230, 164, 17, 0.4)'
          : (i === items.length - 1 ? 'none' : '1px solid #f2f5f2'),
      }"
    >
      <div style="font-size: 11px; font-weight: 700; color: var(--ink); letter-spacing: 0.02em;">
        {{ item.name }}
      </div>
      <div v-for="(s, j) in item.status" :key="j" style="display: flex; justify-content: center;">
        <span
          :style="{
            fontSize: '10px', fontWeight: 800, letterSpacing: '0.04em',
            padding: '4px 10px', borderRadius: '999px',
            background: pillBg(s), color: pillFg(s),
            textTransform: 'uppercase',
          }"
        >
          {{ s === 'aktif' ? 'AKTIF' : 'MATI' }}
        </span>
      </div>
    </div>
  </DashboardMockCard>
</template>
