<script setup>
const platforms = [
  { id: 'grab',   name: 'GrabFood',   total: 29, open: 0, closed: 29, itemActive: 399, itemInactive: 433 },
  { id: 'go',     name: 'GoFood',     total: 29, open: 0, closed: 29, itemActive: 425, itemInactive: 423 },
  { id: 'shopee', name: 'ShopeeFood', total: 28, open: 0, closed: 28, itemActive: 419, itemInactive: 311, alert: true },
]
</script>

<template>
  <DashboardMockCard glow="var(--danger)">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
      <div style="font-size: 13px; font-weight: 800; color: var(--ink-2);">
        Laporan Terkini
      </div>
    </div>

    <div class="status-grid" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
      <div
        v-for="p in platforms"
        :key="p.id"
        class="status-card"
        :style="{
          padding: '14px',
          border: p.alert ? '2px solid var(--danger)' : '1px solid var(--border)',
          borderRadius: '10px',
          background: p.alert ? 'rgba(214,69,69,0.04)' : 'white',
          position: 'relative',
          boxShadow: p.alert ? '0 0 0 4px rgba(214,69,69,0.12)' : 'none',
        }"
      >
        <div class="status-card-head" style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
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
  </DashboardMockCard>
</template>

<style scoped>
@media (max-width: 480px) {
  .status-grid { gap: 6px !important; }
  .status-card { padding: 10px 8px !important; }
  .status-card-head { flex-direction: column; align-items: flex-start !important; gap: 4px !important; }
  .status-card-head > div { font-size: 12px !important; }
}
</style>
