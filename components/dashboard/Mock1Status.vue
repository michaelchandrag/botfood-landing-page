<script setup>
const platforms = [
  { id: 'grab',   name: 'GrabFood',   total: 29, open: 0, closed: 29, itemActive: 399, itemInactive: 433 },
  { id: 'go',     name: 'GoFood',     total: 29, open: 0, closed: 29, itemActive: 425, itemInactive: 423 },
  { id: 'shopee', name: 'ShopeeFood', total: 28, open: 0, closed: 28, itemActive: 419, itemInactive: 311, alert: true },
]
</script>

<template>
  <MockCard glow="var(--danger)">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
      <div style="font-size: 13px; font-weight: 800; color: var(--ink-2);">
        Laporan Terkini
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
      <div
        v-for="p in platforms"
        :key="p.id"
        :style="{
          padding: '14px',
          border: p.alert ? '2px solid var(--danger)' : '1px solid var(--border)',
          borderRadius: '10px',
          background: p.alert ? 'rgba(214,69,69,0.04)' : 'white',
          position: 'relative',
          boxShadow: p.alert ? '0 0 0 4px rgba(214,69,69,0.12)' : 'none',
        }"
      >
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <PlatformIcon :name="p.id" :size="20" />
          <div style="font-size: 13px; font-weight: 800;">{{ p.name }}</div>
        </div>
        <div style="font-size: 10px; color: var(--ink-3); font-weight: 700; margin-bottom: 8px;">
          {{ p.total }} Total Outlet
        </div>
        <div style="font-size: 11px; line-height: 1.55;">
          <div style="color: var(--ok); font-weight: 700;">{{ p.open }} Outlet Buka</div>
          <div style="color: #c53131; font-weight: 700;">{{ p.closed }} Outlet Tutup</div>
          <div style="color: var(--ok); font-weight: 700; margin-top: 4px;">{{ p.itemActive }} Item Aktif</div>
          <div style="color: #c53131; font-weight: 700;">{{ p.itemInactive }} Tidak Aktif</div>
        </div>
      </div>
    </div>
  </MockCard>
</template>
