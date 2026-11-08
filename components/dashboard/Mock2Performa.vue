<script setup>
const outlets = [
  { name: 'MyFoodBrand, Cicurug',        perf: 23, color: '#c53131' },
  { name: 'MyFoodBrand, Pamuruyan',      perf: 26, color: '#c53131' },
  { name: 'MyFoodBrand, Jatimelati',     perf: 35, color: '#e6a411' },
  { name: 'MyFoodBrand, Pelabuhan Ratu', perf: 37, color: '#e6a411' },
  { name: 'MyFoodBrand, Cikembang',      perf: 38, color: '#e6a411' },
]
</script>

<template>
  <DashboardMockCard glow="var(--brand)">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: #e6a411; margin-bottom: 2px;">
          <IconAlert :size="14" />
          Outlet Terendah by Performa Item
        </div>
        <div style="font-size: 11px; color: var(--ink-3);">GoFood · Jumat, 15 Mei 2026</div>
      </div>
      <span style="font-size: 10px; padding: 3px 8px; border-radius: 999px; background: var(--bg-tint); color: var(--brand); font-weight: 700;">
        Target 100%
      </span>
    </div>

    <div
      v-for="(o, i) in outlets"
      :key="o.name"
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 0',
        borderBottom: i === outlets.length - 1 ? 'none' : '1px solid #f2f5f2',
      }"
    >
      <PlatformIcon name="go" :size="22" />
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 13px; font-weight: 700; margin-bottom: 5px;">{{ o.name }}</div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="flex: 1; height: 6px; background: #f2f5f2; border-radius: 3px; overflow: hidden; position: relative;">
            <div :style="{ height: '100%', width: o.perf + '%', background: o.color, borderRadius: '3px', transition: 'width .8s' }" />
          </div>
          <span
            :style="{
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontVariantNumeric: 'tabular-nums',
              fontSize: '14px',
              color: o.color,
              minWidth: '44px',
              textAlign: 'right',
              background: i === 0 ? 'rgba(214,69,69,0.12)' : 'transparent',
              padding: i === 0 ? '2px 8px' : '2px 0',
              borderRadius: '6px',
              border: i === 0 ? '1.5px solid rgba(214,69,69,0.3)' : 'none',
            }"
          >
            {{ o.perf }}%
          </span>
        </div>
      </div>
    </div>
  </DashboardMockCard>
</template>
