# Botfood Landing Page

CCTV untuk outlet online — pantau GrabFood, GoFood & ShopeeFood dalam 1 dashboard real-time.

Built with **Nuxt 3** as a Static Site (SSG) — deployable to any static host (Nginx, S3, CloudFront, etc.).

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build static site for production → outputs to `.output/public/`
npm run generate

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
nuxt-app/
├── nuxt.config.ts       # Nuxt config + SEO meta + Google Fonts
├── package.json
├── app.vue              # Root component (just <NuxtPage>)
├── pages/
│   └── index.vue        # Main landing page (composition of all sections)
├── components/
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── CCTVDashboard.vue
│   ├── ClientLogos.vue
│   ├── Metrics.vue
│   ├── DashboardTour.vue
│   ├── Features.vue
│   ├── CaseStudies.vue
│   ├── Comparison.vue
│   ├── Testimonials.vue
│   ├── Pricing.vue
│   ├── Timeline.vue
│   ├── TimelineVisual.vue
│   ├── FAQ.vue
│   ├── CTASection.vue
│   ├── Footer.vue
│   ├── FloatingWA.vue
│   ├── BotfoodLogo.vue
│   ├── BotfoodLogoDark.vue
│   ├── icons/           # IconArrow, IconCheck, IconStar, IconWA, etc.
│   ├── dashboard/       # MockCard, Mock1Status, Mock2Performa, Mock3Seragam
│   └── features/        # MockRating, MockOutlet, MockItem, MockUlasan
├── composables/
│   └── useConstants.ts  # WA_HREF = wa.me/6287824622895
├── assets/
│   └── css/
│       └── styles.css   # Design tokens (CSS variables) + base styles
└── public/              # Static images served at /
    ├── botfood_logo.png
    ├── p_grabfood.png · p_gofood.png · p_shopeefood.png
    ├── clients_row1.png · clients_row2.png · clients_row3.png
    ├── og_image.png
    └── favicon-32.png · favicon-64.png · apple-touch-icon.png
```

---

## 🌐 Deploy ke AWS VM (Nginx)

### 1. Build static site (di local atau CI)

```bash
npm run generate
# Output: .output/public/  (semua HTML/CSS/JS/image static)
```

### 2. Upload ke VM

```bash
# Via rsync (paling sederhana)
rsync -avz --delete .output/public/ user@your-vm-ip:/var/www/botfood/
```

### 3. Nginx config (`/etc/nginx/sites-available/botfood`)

```nginx
server {
  listen 80;
  server_name botfood.id www.botfood.id;
  root /var/www/botfood;
  index index.html;

  # Try files for clean URLs (Nuxt routing)
  location / {
    try_files $uri $uri.html $uri/ =404;
  }

  # Aggressive caching for static assets
  location ~* \.(jpg|jpeg|png|gif|svg|webp|woff2|woff|ttf|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
  }

  # Gzip
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
  gzip_min_length 1000;
}
```

```bash
# Enable site & reload
sudo ln -s /etc/nginx/sites-available/botfood /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL gratis (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d botfood.id -d www.botfood.id
# Auto-renew sudah otomatis via cron
```

---

## 🔄 Deploy Script (otomatis)

Buat `deploy.sh` di root project:

```bash
#!/bin/bash
set -e

echo "→ Building..."
npm run generate

echo "→ Uploading to VM..."
rsync -avz --delete .output/public/ ubuntu@YOUR_VM_IP:/var/www/botfood/

echo "✅ Deployed!"
```

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📞 Konfigurasi

Semua CTA mengarah ke WhatsApp: **`https://wa.me/6287824622895`**

Untuk ganti, edit `composables/useConstants.ts`:

```ts
export const WA_HREF = 'https://wa.me/YOUR_NUMBER'
export const WA_DISPLAY = 'wa.me/YOUR_NUMBER'
```

---

## 📦 Tech Stack

- **Nuxt 3** — Vue 3 framework dengan Static Site Generation
- **Vue 3 Composition API** — `<script setup>` syntax
- **Nginx** — static file serving di AWS VM
- **Let's Encrypt** — SSL gratis
- **Nunito** + **JetBrains Mono** — fonts (loaded via Google Fonts)

Tidak ada framework CSS — semua styling pakai CSS custom properties + inline styles untuk simplicity.
