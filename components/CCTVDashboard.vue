<script setup>
const tick = ref(0)

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    tick.value += 1
  }, 2400)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})

const outlets = [
  { name: 'Sudirman',   city: 'Jakarta', platforms: { grab: 'open',   go: 'open',   shopee: 'open' } },
  { name: 'Kemang',     city: 'Jakarta', platforms: { grab: 'open',   go: 'closed', shopee: 'open' } },
  { name: 'Dago',       city: 'Bandung', platforms: { grab: 'open',   go: 'open',   shopee: 'open' } },
  { name: 'Tebet',      city: 'Jakarta', platforms: { grab: 'oos',    go: 'open',   shopee: 'open' } },
  { name: 'Senayan',    city: 'Jakarta', platforms: { grab: 'open',   go: 'open',   shopee: 'open' } },
  { name: 'Cihampelas', city: 'Bandung', platforms: { grab: 'open',   go: 'open',   shopee: 'closed' } },
]

const pillStyle = (s) => {
  if (s === 'open')   return { bg: 'rgba(26, 154, 53, 0.14)', fg: '#6bee8e', label: 'Buka' }
  if (s === 'closed') return { bg: 'rgba(214, 69, 69, 0.18)', fg: '#ff7d7d', label: 'Tutup' }
  if (s === 'oos')    return { bg: 'rgba(230, 164, 17, 0.18)', fg: '#ffc754', label: 'OOS' }
  return { bg: '#222', fg: '#888', label: '—' }
}

const stats = [
  { label: 'Outlet buka', value: '37/40', color: '#6bee8e', pct: 92 },
  { label: 'Menu aktif',   value: '1,284', color: '#58d278', pct: 84 },
  { label: 'Peringatan',   value: '3',     color: '#ff7d7d', pct: 12 },
]
</script>

<template>
  <div
    class="cctv-dashboard"
    :style="{
      background: 'var(--dark)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 40px 100px -20px rgba(12,32,14,0.35), 0 20px 40px -16px rgba(12,32,14,0.24)',
      padding: '18px',
      color: 'white',
      fontFamily: 'var(--font)',
      position: 'relative',
      overflow: 'hidden',
    }"
  >
    <!-- Window chrome -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="display: flex; gap: 6px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56;" />
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e;" />
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f;" />
        </div>
        <div style="font-size: 11px; font-family: var(--font-mono); color: rgba(255,255,255,0.4); margin-left: 8px;">
          botfood.id/monitor
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #6bee8e;">
        <IconDot color="#6bee8e" :size="7" />
        LIVE
      </div>
    </div>

    <!-- Header row -->
    <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px;">
      <div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.48); margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 700;">
          Monitor Outlet · Real-time
        </div>
        <div style="font-size: 18px; font-weight: 800;">
          40 outlet · 3 platform
        </div>
      </div>
      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-size: 10px; padding: 3px 8px; border-radius: 999px; background: rgba(214, 69, 69, 0.18); color: #ff7d7d; font-weight: 700;">
          2 tutup
        </span>
        <span style="font-size: 10px; padding: 3px 8px; border-radius: 999px; background: rgba(230, 164, 17, 0.18); color: #ffc754; font-weight: 700;">
          1 OOS
        </span>
      </div>
    </div>

    <!-- Stats strip -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 14px;">
      <div
        v-for="s in stats"
        :key="s.label"
        style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 12px;"
      >
        <div style="font-size: 10px; color: rgba(255,255,255,0.48); font-weight: 600; margin-bottom: 4px;">
          {{ s.label }}
        </div>
        <div :style="{ fontSize: '20px', fontWeight: 800, color: s.color, marginBottom: '6px' }">
          {{ s.value }}
        </div>
        <div style="height: 3px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden;">
          <div :style="{ height: '100%', width: s.pct + '%', background: s.color, borderRadius: '2px' }" />
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="cctv-table" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; overflow: hidden;">
      <div
        class="cctv-row cctv-header"
        style="display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; padding: 10px 14px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02);"
      >
        <div>Outlet</div>
        <div class="cctv-platform-label" style="display: flex; align-items: center; gap: 6px;">
          <IconGrab :size="12" />
          <span>GrabFood</span>
        </div>
        <div class="cctv-platform-label" style="display: flex; align-items: center; gap: 6px;">
          <IconGo :size="12" />
          <span>GoFood</span>
        </div>
        <div class="cctv-platform-label" style="display: flex; align-items: center; gap: 6px;">
          <IconShopee :size="12" />
          <span>ShopeeFood</span>
        </div>
      </div>

      <div
        v-for="(o, i) in outlets"
        :key="o.name"
        class="cctv-row"
        :style="{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          padding: '12px 14px',
          borderBottom: i === outlets.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)',
          fontSize: '13px',
          alignItems: 'center',
          background: (tick % outlets.length) === i ? 'rgba(0, 123, 27, 0.06)' : 'transparent',
          transition: 'background .4s ease',
        }"
      >
        <div>
          <div style="font-weight: 700;">{{ o.name }}</div>
          <div style="font-size: 11px; color: rgba(255,255,255,0.4);">{{ o.city }}</div>
        </div>
        <div v-for="p in ['grab', 'go', 'shopee']" :key="p">
          <span
            :style="{
              fontSize: '11px', fontWeight: 700,
              padding: '4px 10px', borderRadius: '999px',
              background: pillStyle(o.platforms[p]).bg,
              color: pillStyle(o.platforms[p]).fg,
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }"
          >
            <IconDot :color="pillStyle(o.platforms[p]).fg" :size="6" :pulse="o.platforms[p] !== 'open'" />
            {{ pillStyle(o.platforms[p]).label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div
      class="cctv-toast"
      style="position: absolute; right: 18px; bottom: 18px; background: rgba(214, 69, 69, 0.12); border: 1px solid rgba(214, 69, 69, 0.35); backdrop-filter: blur(12px); border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; animation: slide-in .6s ease; max-width: 260px;"
    >
      <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(214, 69, 69, 0.2); display: flex; align-items: center; justify-content: center; color: #ff7d7d; flex-shrink: 0;">
        <IconAlert :size="16" />
      </div>
      <div>
        <div style="font-size: 12px; font-weight: 700; color: #ff7d7d;">Outlet Kemang tutup</div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.6);">GoFood · 12:24 WIB · peak hour</div>
      </div>
    </div>
  </div>
</template>
