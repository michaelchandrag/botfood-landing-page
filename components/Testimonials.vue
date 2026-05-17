<script setup>
const items = [
  { name: 'A. Darmawan', role: 'Owner, 15 Cabang',
    text: 'Botfood sangat membantu memantau restoran kami. Terlalu banyak cabang, tapi mudah pantau semuanya hanya dalam 1 website.' },
  { name: 'S. Johannes', role: 'Manajer Operasional',
    text: 'Kami jadi untung beberapa kali lipat. Biasanya harus login-logout manual di berbagai platform. Dengan Botfood, semua dari 1 website.' },
  { name: 'R. Wibowo', role: 'Owner Franchise Kuliner',
    text: 'Desain yang simpel, bahkan seumuran saya pun bisa mudah pakai Botfood. Data lengkap dan sangat detail.' },
]

const initials = (name) => name.split(' ').map(x => x[0]).join('')
</script>

<template>
  <section id="testimoni" style="background: var(--dark); color: white; padding: 112px 0; position: relative; overflow: hidden;">
    <div style="position: absolute; inset: 0; background-image: radial-gradient(circle at 20% 30%, rgba(0,123,27,0.12), transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,123,27,0.08), transparent 50%); pointer-events: none;" />
    <div class="container" style="position: relative;">
      <div class="section-head on-dark">
        <span class="eyebrow eyebrow-dark">Testimoni</span>
        <h2 style="color: white;">Kata mereka yang <em>sudah ambil kontrol</em></h2>
      </div>
      <div class="testi-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div
          v-for="(t, i) in items"
          :key="i"
          class="testi-card"
          style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 28px; display: flex; flex-direction: column; transition: all .2s;"
        >
          <div style="display: flex; gap: 3px; color: #ffb84d; margin-bottom: 16px;">
            <IconStar v-for="j in 5" :key="j" :size="16" />
          </div>
          <p style="font-size: 17px; line-height: 1.5; margin-bottom: 20px; color: rgba(255,255,255,0.88); flex: 1;">
            "{{ t.text }}"
          </p>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, rgba(0,123,27,0.4), rgba(0,123,27,0.15)); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; border: 1px solid rgba(255,255,255,0.1);">
              {{ initials(t.name) }}
            </div>
            <div>
              <div style="font-size: 14px; font-weight: 800;">{{ t.name }}</div>
              <div style="font-size: 12px; color: rgba(255,255,255,0.56);">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testi-card:hover {
  border-color: rgba(0, 123, 27, 0.4) !important;
  background: rgba(0, 123, 27, 0.06) !important;
}
@media (max-width: 900px) {
  .testi-grid { grid-template-columns: 1fr !important; }
}
</style>
