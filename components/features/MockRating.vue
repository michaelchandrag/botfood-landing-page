<script setup>
// Rating mockup — daily trend chart + movers list
const days = ['20 Feb', 'Mar', '10 Mar', '20 Mar', 'Apr', '10 Apr', '20 Apr', 'May', '10 May', 'Now']
const grab   = [4.86, 4.86, 4.86, 4.86, 4.86, 4.86, 4.87, 4.86, 4.87, 4.87]
const go     = [4.89, 4.89, 4.89, 4.89, 4.89, 4.89, 4.89, 4.89, 4.88, 4.88]
const shopee = [4.91, 4.91, 4.91, 4.91, 4.91, 4.91, 4.90, 4.90, 4.90, 4.90]

const movers = [
  { p: 'shopee', name: 'MyFoodBrand, Pangleseran', cur: 4.9, prev: 4.8, dir: 'up',   when: '4 hari' },
  { p: 'grab',   name: 'MyFoodBrand, Cikaret',     cur: 4.9, prev: 4.8, dir: 'up',   when: '10 jam' },
  { p: 'go',     name: 'MyFoodBrand, Pamuruyan',   cur: 4.9, prev: 5.0, dir: 'down', when: '8 hari' },
  { p: 'shopee', name: 'MyFoodBrand, Pekapuran',   cur: 4.9, prev: 5.0, dir: 'down', when: '5 hari' },
]

const W = 420, H = 150, pl = 30, pr = 10, pt = 14, pb = 22
const min = 4.85, max = 4.92
const x = (i) => pl + (i * (W - pl - pr) / (days.length - 1))
const y = (v) => pt + ((max - v) / (max - min)) * (H - pt - pb)
const buildPath = (arr) => arr.map((v, i) => `${i===0?'M':'L'}${x(i)},${y(v)}`).join(' ')

const grabPath = buildPath(grab)
const goPath = buildPath(go)
const shopeePath = buildPath(shopee)
const shopeeAreaPath = `${shopeePath} L ${x(days.length-1)},${y(min)} L ${x(0)},${y(min)} Z`

const annIdx = 6
const yLabels = [4.86, 4.88, 4.90, 4.92]
const xLabels = [0, 2, 5, 7, 9]
</script>

<template>
  <div style="background: white; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow-md); padding: 18px; display: flex; flex-direction: column; overflow: hidden;">
    <!-- Header -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
      <div style="min-width: 0;">
        <div style="font-size: 13px; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          Perkembangan Rating
        </div>
        <div style="font-size: 11px; color: var(--ink-3);">Feb – May 2026 · daily</div>
      </div>
      <button style="padding: 5px 10px; font-size: 11px; font-weight: 700; background: var(--bg-tint); color: var(--brand); border: 1px solid var(--border); border-radius: 8px; white-space: nowrap; flex-shrink: 0;">
        Excel
      </button>
    </div>

    <!-- Chart -->
    <svg :viewBox="`0 0 ${W} ${H}`" style="width: 100%; height: auto; display: block; margin-bottom: 10px;">
      <g v-for="v in yLabels" :key="v">
        <line :x1="pl" :y1="y(v)" :x2="W-pr" :y2="y(v)" stroke="#eef1ee" stroke-dasharray="2,3" />
        <text :x="pl-4" :y="y(v)+3" font-size="8" fill="#9ca59c" text-anchor="end">{{ v }}</text>
      </g>

      <path :d="shopeeAreaPath" fill="var(--shopeefood)" opacity="0.06" />
      <path :d="shopeePath" stroke="var(--shopeefood)" stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round" />
      <path :d="goPath"     stroke="var(--gofood)"     stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round" />
      <path :d="grabPath"   stroke="var(--grabfood)"   stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round" />

      <circle :cx="x(days.length-1)" :cy="y(shopee[shopee.length-1])" r="3.5" fill="white" stroke="var(--shopeefood)" stroke-width="2" />
      <circle :cx="x(days.length-1)" :cy="y(go[go.length-1])"         r="3.5" fill="white" stroke="var(--gofood)"     stroke-width="2" />
      <circle :cx="x(days.length-1)" :cy="y(grab[grab.length-1])"     r="3.5" fill="white" stroke="var(--grabfood)"   stroke-width="2" />

      <line :x1="x(annIdx)" :y1="y(shopee[annIdx-1])" :x2="x(annIdx)" :y2="y(shopee[annIdx])"
            stroke="#c53131" stroke-width="1.5" stroke-dasharray="2,2" />
      <circle :cx="x(annIdx)" :cy="y(shopee[annIdx])" r="4" fill="#c53131" />
      <g :transform="`translate(${x(annIdx)+8}, ${y(shopee[annIdx])-14})`">
        <rect width="76" height="18" rx="4" fill="#c53131" />
        <text x="38" y="12" font-size="9" fill="white" font-weight="800" text-anchor="middle">↓ Turun 0.01</text>
      </g>

      <text v-for="i in xLabels" :key="i" :x="x(i)" :y="H - 4" font-size="8" fill="#9ca59c" text-anchor="middle">
        {{ days[i] }}
      </text>
    </svg>

    <!-- Legend -->
    <div style="display: flex; gap: 12px; font-size: 10px; font-weight: 700; margin-bottom: 12px; justify-content: center;">
      <span style="display: flex; align-items: center; gap: 4px;">
        <span style="width: 9px; height: 2.5px; background: var(--gofood); border-radius: 2px;" /> GoFood
      </span>
      <span style="display: flex; align-items: center; gap: 4px;">
        <span style="width: 9px; height: 2.5px; background: var(--grabfood); border-radius: 2px;" /> GrabFood
      </span>
      <span style="display: flex; align-items: center; gap: 4px;">
        <span style="width: 9px; height: 2.5px; background: var(--shopeefood); border-radius: 2px;" /> ShopeeFood
      </span>
    </div>

    <div style="height: 1px; background: var(--border); margin: 0 -18px 14px;" />

    <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; color: var(--brand); margin-bottom: 8px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 9V5a3 3 0 0 0-6 0v4" />
        <path d="M21 12H3l1.5 9h15z" />
      </svg>
      Trend Rating Terbaru
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div
        v-for="(m, i) in movers"
        :key="i"
        :style="{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto auto',
          alignItems: 'center', gap: '8px',
          padding: '7px 10px',
          background: m.dir === 'up' ? 'rgba(26, 154, 53, 0.05)' : 'rgba(214, 69, 69, 0.05)',
          border: `1px solid ${m.dir === 'up' ? 'rgba(26, 154, 53, 0.18)' : 'rgba(214, 69, 69, 0.18)'}`,
          borderRadius: '8px',
          fontSize: '11px',
        }"
      >
        <PlatformIcon :name="m.p" :size="16" />
        <div style="font-weight: 600; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          {{ m.name }}
        </div>
        <div style="display: flex; align-items: center; gap: 4px; font-family: var(--font-mono); font-variant-numeric: tabular-nums;">
          <span :style="{ fontWeight: 800, fontSize: '13px', color: m.dir === 'up' ? '#137f2b' : '#c53131' }">
            {{ m.cur }}
          </span>
          <span :style="{ fontSize: '14px', fontWeight: 900, color: m.dir === 'up' ? '#137f2b' : '#c53131', lineHeight: 1 }">
            {{ m.dir === 'up' ? '↑' : '↓' }}
          </span>
          <span style="font-size: 10px; color: var(--ink-3);">({{ m.prev }})</span>
        </div>
        <div style="font-size: 9px; color: var(--ink-3); font-family: var(--font-mono); text-align: right; min-width: 50px; white-space: nowrap;">
          {{ m.when }} lalu
        </div>
      </div>
    </div>
  </div>
</template>
