<script setup>
const metrics = [
  { value: '40+',      label: 'Outlet terpantau',  sub: 'Across 16 brand kuliner' },
  { value: '3',        label: 'Platform sekaligus', sub: 'GrabFood · GoFood · ShopeeFood' },
  { value: '0-30 mnt', label: 'Refresh data',       sub: 'Real-time dari sudut customer' },
  { value: '24/7',     label: 'Live monitoring',    sub: 'Auto-alert outlet bermasalah' },
]
</script>

<template>
  <section style="padding: 64px 0; background: var(--bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div style="text-align: center; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 36px;">
        Botfood dalam <span style="color: var(--brand)">angka</span>
      </div>

      <div
        class="metrics-grid"
        style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 1080px; margin: 0 auto; background: white; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 16px rgba(12, 32, 14, 0.04);"
      >
        <div
          v-for="(m, i) in metrics"
          :key="i"
          class="metric-cell"
          :style="{
            padding: '28px 24px',
            borderRight: i === metrics.length - 1 ? 'none' : '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '6px',
            alignItems: 'flex-start',
            position: 'relative',
          }"
        >
          <div style="font-size: 36px; font-weight: 900; font-family: var(--font-mono); color: var(--brand); line-height: 1; letter-spacing: -0.02em;">
            {{ m.value }}
          </div>
          <div style="font-size: 14px; font-weight: 800; color: var(--ink); margin-top: 4px;">
            {{ m.label }}
          </div>
          <div style="font-size: 12px; color: var(--ink-3); line-height: 1.45;">
            {{ m.sub }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 820px) {
  .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .metric-cell:nth-child(odd)  { border-right: 1px solid var(--border) !important; }
  .metric-cell:nth-child(even) { border-right: none !important; }
  .metric-cell:nth-child(-n+2) { border-bottom: 1px solid var(--border) !important; }
}
@media (max-width: 480px) {
  .metrics-grid { grid-template-columns: 1fr !important; }
  .metric-cell { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
  .metric-cell:last-child { border-bottom: none !important; }
}
</style>
