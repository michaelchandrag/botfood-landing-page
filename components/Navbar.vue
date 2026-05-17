<script setup>
import { WA_HREF } from '~/composables/useConstants'

const scrolled = ref(false)
const mobileOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const handleNavClick = () => {
  mobileOpen.value = false
}

const links = [
  { href: '#dashboard-tour', label: 'Dashboard' },
  { href: '#fitur', label: 'Fitur' },
  { href: '#harga', label: 'Harga' },
  { href: '#testimoni', label: 'Testimoni' },
]
</script>

<template>
  <nav
    :style="{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'all .25s ease',
      background: (scrolled || mobileOpen) ? 'rgba(244, 248, 244, 0.92)' : 'transparent',
      backdropFilter: (scrolled || mobileOpen) ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: (scrolled || mobileOpen) ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }"
  >
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: 72px;">
      <a href="#top" @click="handleNavClick">
        <BotfoodLogo />
      </a>

      <div class="nav-links" style="display: flex; align-items: center; gap: 32px;">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="nav-link"
        >
          {{ l.label }}
        </a>
      </div>

      <a
        :href="WA_HREF"
        target="_blank"
        rel="noopener"
        class="nav-cta btn btn-primary"
        style="padding: 11px 18px; font-size: 14px;"
      >
        Hubungi Kami
        <IconArrow :size="14" />
      </a>

      <!-- Hamburger — mobile only -->
      <button
        class="nav-hamburger"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Tutup menu' : 'Buka menu'"
        :style="{
          display: 'none',
          width: '44px', height: '44px',
          alignItems: 'center', justifyContent: 'center',
          borderRadius: '10px',
          background: mobileOpen ? 'var(--bg-tint)' : 'transparent',
          transition: 'background .15s',
        }"
      >
        <div style="position: relative; width: 20px; height: 14px;">
          <span :style="{
            position: 'absolute', left: 0, right: 0, height: '2px',
            background: 'var(--ink)', borderRadius: '2px',
            top: mobileOpen ? '6px' : '0',
            transform: mobileOpen ? 'rotate(45deg)' : 'none',
            transition: 'all .2s ease',
          }" />
          <span :style="{
            position: 'absolute', left: 0, right: 0, height: '2px',
            background: 'var(--ink)', borderRadius: '2px',
            top: '6px',
            opacity: mobileOpen ? 0 : 1,
            transition: 'opacity .15s',
          }" />
          <span :style="{
            position: 'absolute', left: 0, right: 0, height: '2px',
            background: 'var(--ink)', borderRadius: '2px',
            top: mobileOpen ? '6px' : '12px',
            transform: mobileOpen ? 'rotate(-45deg)' : 'none',
            transition: 'all .2s ease',
          }" />
        </div>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div
      class="nav-drawer"
      :style="{
        overflow: 'hidden',
        maxHeight: mobileOpen ? '360px' : '0',
        transition: 'max-height .3s ease',
        borderTop: mobileOpen ? '1px solid var(--border)' : 'none',
        background: 'rgba(244, 248, 244, 0.96)',
      }"
    >
      <div class="container" style="padding-top: 16px; padding-bottom: 20px; display: flex; flex-direction: column; gap: 4px;">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          @click="handleNavClick"
          style="padding: 14px 4px; font-size: 17px; font-weight: 700; color: var(--ink); border-bottom: 1px solid var(--border);"
        >
          {{ l.label }}
        </a>
        <a
          :href="WA_HREF"
          target="_blank"
          rel="noopener"
          @click="handleNavClick"
          class="btn btn-primary"
          style="margin-top: 12px; justify-content: center;"
        >
          Hubungi Kami
          <IconArrow :size="14" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-2);
  transition: color .15s;
}
.nav-link:hover { color: var(--brand); }

@media (max-width: 820px) {
  .nav-links { display: none !important; }
  .nav-cta { display: none !important; }
  .nav-hamburger { display: inline-flex !important; }
}
@media (min-width: 821px) {
  .nav-drawer { display: none !important; }
}
</style>
