<script setup>
const rows = [
  { name: 'MyFoodBrand, Sudirman',     p: 'grab',   rating: 4.9,    status: 'buka',  active: 28, total: 30, perfColor: 'var(--ok)' },
  { name: 'MyFoodBrand, Tebet',        p: 'go',     rating: null,   status: 'tutup', active: 0,  total: 30, perfColor: 'var(--ink-3)' },
  { name: 'MyFoodBrand, Bantargebang', p: 'shopee', rating: 4.9,    status: 'buka',  active: 21, total: 30, perfColor: 'var(--warn)' },
  { name: 'MyFoodBrand, Cikampek',     p: 'grab',   rating: 'new',  status: 'buka',  active: 2,  total: 20, perfColor: 'var(--danger)' },
  { name: 'MyFoodBrand, Benhil',       p: 'shopee', rating: 4.9,    status: 'buka',  active: 12, total: 30, perfColor: 'var(--danger)' },
  { name: 'MyFoodBrand, Cikole',       p: 'go',     rating: 4.5,    status: 'tutup', active: 0,  total: 24, perfColor: 'var(--ink-3)' },
]

const pct = (r) => r.total > 0 ? Math.round(r.active / r.total * 100) : 0
</script>

<template>
  <div style="background: white; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow-md); padding: 16px;">
    <!-- Filter row -->
    <div style="display: grid; grid-template-columns: 1fr 0.8fr 0.8fr; gap: 6px; margin-bottom: 12px;">
      <div style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 10px; color: var(--ink-3); display: flex; align-items: center; gap: 6px;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        Nama outlet
      </div>
      <div style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 8px; font-size: 10px; color: var(--ink-2); font-weight: 700; display: flex; align-items: center; justify-content: space-between;">
        Platform <span style="color: var(--ink-3);">▾</span>
      </div>
      <div style="padding: 6px 10px; border: 1.5px solid var(--brand); border-radius: 8px; font-size: 10px; color: var(--brand); font-weight: 800; display: flex; align-items: center; justify-content: space-between; background: var(--bg-tint);">
        Buka/Tutup <span>▾</span>
      </div>
    </div>

    <!-- Header -->
    <div style="display: grid; grid-template-columns: 1.5fr 0.5fr 0.6fr 0.6fr 0.8fr; gap: 6px; padding: 8px 10px; background: var(--bg-tint); border-radius: 8px; font-size: 9px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px;">
      <div>Outlet</div>
      <div style="text-align: center;">Channel</div>
      <div style="text-align: center;">Rating</div>
      <div style="text-align: center;">Status</div>
      <div style="text-align: right; color: var(--brand); display: flex; justify-content: flex-end; align-items: center; gap: 3px;">
        Item ↑
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="(r, i) in rows"
      :key="i"
      :style="{
        display: 'grid',
        gridTemplateColumns: '1.5fr 0.5fr 0.6fr 0.6fr 0.8fr',
        gap: '6px', padding: '9px 10px',
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid #f2f5f2',
        alignItems: 'center',
        fontSize: '11px',
        opacity: r.status === 'tutup' ? 0.55 : 1,
      }"
    >
      <span :style="{
        fontWeight: 600,
        color: r.status === 'tutup' ? 'var(--ink-3)' : 'var(--ink)',
        textDecoration: r.status === 'tutup' ? 'line-through' : 'none',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }">
        {{ r.name }}
      </span>
      <div style="display: flex; justify-content: center;">
        <PlatformIcon :name="r.p" :size="16" />
      </div>
      <div style="text-align: center;">
        <span v-if="r.rating === 'new'" style="font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px; background: rgba(59, 130, 196, 0.12); color: #3B82C4; white-space: nowrap;">
          Belum
        </span>
        <span v-else-if="r.rating === null" style="color: var(--ink-3); font-family: var(--font-mono);">—</span>
        <span v-else :style="{
          fontWeight: 700, fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums',
          color: r.rating < 4.7 ? '#e6a411' : 'var(--ink)',
        }">
          {{ r.rating }}
        </span>
      </div>
      <div style="display: flex; justify-content: center;">
        <span :style="{
          fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
          padding: '2px 8px', borderRadius: '999px',
          background: r.status === 'tutup' ? 'rgba(214,69,69,0.14)' : 'rgba(26,154,53,0.14)',
          color: r.status === 'tutup' ? '#c53131' : '#137f2b',
          display: 'inline-flex', alignItems: 'center', gap: '4px',
        }">
          <span :style="{
            width: '4px', height: '4px', borderRadius: '50%',
            background: r.status === 'tutup' ? '#c53131' : '#137f2b'
          }" />
          {{ r.status === 'tutup' ? 'Tutup' : 'Buka' }}
        </span>
      </div>
      <div style="display: flex; align-items: center; gap: 6px; justify-content: flex-end;">
        <span :style="{
          fontWeight: 700, fontFamily: 'var(--font-mono)',
          fontVariantNumeric: 'tabular-nums',
          color: r.perfColor, fontSize: '11px',
        }">
          {{ r.active }}/{{ r.total }}
        </span>
        <span :style="{ fontSize: '9px', color: r.perfColor, fontWeight: 700, minWidth: '32px', textAlign: 'right' }">
          ({{ pct(r) }}%)
        </span>
      </div>
    </div>

    <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: var(--ink-3);">
      <span>Halaman 1 dari 9</span>
      <div style="display: flex; gap: 4px;">
        <button style="padding: 3px 8px; border: 1px solid var(--border); border-radius: 5px; background: white; font-size: 10px; color: var(--ink-3);">←</button>
        <button style="padding: 3px 8px; border: 1px solid var(--brand); border-radius: 5px; background: var(--brand); font-size: 10px; color: white; font-weight: 700;">→</button>
      </div>
    </div>
  </div>
</template>
