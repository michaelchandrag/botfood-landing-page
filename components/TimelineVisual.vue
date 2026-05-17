<script setup>
defineProps({
  variant: { type: String, required: true }
})
</script>

<template>
  <!-- WA chat preview -->
  <div v-if="variant === 'wa'" style="background: #ECE5DD; border-radius: 12px; padding: 14px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px;">
    <div style="align-self: flex-start; background: white; padding: 8px 12px; border-radius: 12px 12px 12px 4px; font-size: 11px; color: #333; max-width: 78%; line-height: 1.35; box-shadow: 0 1px 0.5px rgba(0,0,0,0.08);">
      Halo Botfood, saya tertarik untuk pakai sistemnya 🙌
    </div>
    <div style="align-self: flex-end; background: #DCF8C6; padding: 8px 12px; border-radius: 12px 12px 4px 12px; font-size: 11px; color: #222; max-width: 78%; line-height: 1.35; box-shadow: 0 1px 0.5px rgba(0,0,0,0.08);">
      Halo! Boleh kita jadwalkan meeting demo, kapan available? ✨
    </div>
  </div>

  <!-- Meet -->
  <div v-else-if="variant === 'meet'" style="background: #1a1f1a; border-radius: 12px; padding: 8px; width: 100%; height: 100%; position: relative; display: flex; flex-direction: column; gap: 4px;">
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4px; flex: 1; min-height: 0;">
      <div style="background: linear-gradient(135deg, #0d1f0d, #1a3a1a); border-radius: 8px; position: relative; overflow: hidden; padding: 8px;">
        <div style="font-size: 9px; color: #6bee8e; font-weight: 700; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
          <div style="width: 4px; height: 4px; border-radius: 50%; background: #6bee8e;" />
          DEMO LIVE
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px;">
          <div v-for="i in 15" :key="i" :style="{ aspectRatio: 1, background: i === 5 ? '#ff7d7d' : '#6bee8e', borderRadius: '2px', opacity: 0.85 }" />
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div v-for="(label, i) in ['BF', 'YOU']" :key="i" :style="{
          flex: 1,
          background: i === 0 ? '#003d10' : '#2a3a2a',
          borderRadius: '6px',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '9px', fontWeight: 800,
        }">
          <div :style="{
            width: '18px', height: '18px', borderRadius: '50%',
            background: i === 0 ? 'var(--brand)' : '#4a5a4a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '8px',
          }">{{ label }}</div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; gap: 6px; padding-top: 4px;">
      <div v-for="(c, i) in ['#6bee8e', '#4a5a4a', '#4a5a4a', '#ff5f56']" :key="i" :style="{ width: '16px', height: '16px', borderRadius: '50%', background: c }" />
    </div>
  </div>

  <!-- Mini dashboard -->
  <div v-else-if="variant === 'dashboard'" style="background: #0a120a; border-radius: 12px; padding: 10px; width: 100%; height: 100%; color: white; display: flex; flex-direction: column; gap: 6px;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;">
      <div v-for="s in [{v:'37/40',c:'#6bee8e'},{v:'1,284',c:'#58d278'},{v:'3',c:'#ff7d7d'}]" :key="s.v" style="background: rgba(255,255,255,0.04); border-radius: 6px; padding: 5px 6px;">
        <div :style="{ fontSize: '11px', fontWeight: 800, color: s.c, lineHeight: 1, fontFamily: 'var(--font-mono)' }">{{ s.v }}</div>
      </div>
    </div>
    <div style="flex: 1; display: flex; flex-direction: column; gap: 3px; min-height: 0;">
      <div v-for="(row, i) in [['Sudirman','ok','ok','ok'],['Kemang','ok','closed','ok'],['Tebet','oos','ok','ok'],['Senayan','ok','ok','ok']]" :key="i" style="display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr; gap: 4px; align-items: center; font-size: 9px;">
        <span style="font-weight: 600; color: rgba(255,255,255,0.8);">{{ row[0] }}</span>
        <span v-for="(s, j) in row.slice(1)" :key="j" :style="{
          fontSize: '7px', fontWeight: 700,
          padding: '1px 4px', borderRadius: '999px',
          background: s === 'ok' ? 'rgba(107,238,142,0.15)' : s === 'closed' ? 'rgba(255,125,125,0.18)' : 'rgba(255,199,84,0.18)',
          color: s === 'ok' ? '#6bee8e' : s === 'closed' ? '#ff7d7d' : '#ffc754',
          textAlign: 'center',
        }">
          {{ s === 'ok' ? '●' : s === 'closed' ? '○' : '!' }}
        </span>
      </div>
    </div>
  </div>

  <!-- Sheet -->
  <div v-else-if="variant === 'sheet'" style="background: white; border-radius: 12px; padding: 10px; width: 100%; height: 100%; border: 1px solid #ddd; display: flex; flex-direction: column;">
    <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 8px; font-size: 10px; font-weight: 700; color: #0f9d58;">
      <div style="width: 14px; height: 14px; border-radius: 3px; background: #0f9d58; display: flex; align-items: center; justify-content: center; color: white; font-size: 8px; font-weight: 900;">S</div>
      Onboard outlet.xlsx
    </div>
    <div style="display: grid; grid-template-columns: 1fr 0.7fr 0.5fr; gap: 1px; padding: 4px 6px; background: #f1f3f4; font-size: 8px; font-weight: 700; color: #5f6368; letter-spacing: 0.04em; text-transform: uppercase;">
      <span>Outlet</span><span>Platform</span><span>Status</span>
    </div>
    <div v-for="(r, i) in [['Sudirman','3','✓'],['Kemang','3','✓'],['Dago','3','...'],['Tebet','2','...'],['Senayan','3','✓']]" :key="i" :style="{
      display: 'grid', gridTemplateColumns: '1fr 0.7fr 0.5fr',
      gap: '1px', padding: '4px 6px',
      fontSize: '9px',
      borderBottom: '1px solid #f0f0f0',
      background: i === 3 ? '#fff8e1' : 'white',
    }">
      <span style="color: #222;">{{ r[0] }}</span>
      <span style="color: #5f6368; font-family: var(--font-mono);">{{ r[1] }}/3</span>
      <span :style="{ color: r[2] === '✓' ? '#0f9d58' : '#f9ab00', fontWeight: 700, fontSize: '10px' }">{{ r[2] }}</span>
    </div>
  </div>

  <!-- Go Live -->
  <div v-else-if="variant === 'golive'" style="background: linear-gradient(135deg, #f4f8f4, white); border-radius: 12px; padding: 14px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid var(--border);">
    <div>
      <div style="font-size: 9px; font-weight: 800; color: var(--ink-3); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;">
        Progress onboarding
      </div>
      <div style="font-size: 22px; font-weight: 900; color: var(--brand); font-family: var(--font-mono); line-height: 1; letter-spacing: -0.02em;">
        40<span style="opacity: 0.4; font-size: 16px;">/40</span>
      </div>
      <div style="height: 4px; background: var(--border); border-radius: 2px; margin-top: 8px; overflow: hidden;">
        <div style="height: 100%; width: 100%; background: var(--brand); border-radius: 2px;" />
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 6px; padding: 6px 10px; background: var(--brand); color: white; border-radius: 999px; font-size: 10px; font-weight: 800; letter-spacing: 0.04em; align-self: flex-start;">
      <span style="width: 6px; height: 6px; border-radius: 50%; background: #6bee8e; box-shadow: 0 0 0 3px rgba(107,238,142,0.3);" />
      GO LIVE
    </div>
  </div>

  <!-- Invoice -->
  <div v-else-if="variant === 'invoice'" style="background: white; border-radius: 12px; padding: 12px; width: 100%; height: 100%; border: 1px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.04); display: flex; flex-direction: column; font-family: var(--font);">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;">
      <span style="font-size: 9px; font-weight: 800; color: var(--ink-3); letter-spacing: 0.08em;">INVOICE</span>
      <span style="font-size: 8px; color: var(--brand); font-weight: 700; font-family: var(--font-mono);">#BF-001</span>
    </div>
    <div v-for="(row, i) in [['10 outlet', 'Rp 1.000.000'], ['Periode 1 bulan', '']]" :key="i" style="display: flex; justify-content: space-between; font-size: 10px; padding: 3px 0; color: var(--ink-2);">
      <span>{{ row[0] }}</span>
      <span style="font-family: var(--font-mono); color: var(--ink);">{{ row[1] }}</span>
    </div>
    <div style="flex: 1;" />
    <div style="display: flex; justify-content: space-between; padding-top: 6px; border-top: 2px solid var(--ink); font-size: 11px; font-weight: 800;">
      <span style="color: var(--ink);">Total</span>
      <span style="color: var(--brand); font-family: var(--font-mono);">Rp 1.000.000</span>
    </div>
  </div>
</template>
