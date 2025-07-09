# Tuncay.dev - Modern Portfolio & Blog Website

Bu, modern web teknolojileri kullanılarak geliştirilmiş bir portfolyo ve blog websitesidir. Next.js, TypeScript ve Tailwind CSS ile oluşturulmuştur.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **Portfolio Bölümleri**: Projeler, deneyimler ve eğitim bilgileri
- **Markdown Blog Sistemi**: Kolay içerik yönetimi
- **Kod Syntax Highlighting**: Blog yazılarında kod blokları için
- **TypeScript**: Tip güvenliği için
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Dark Mode Desteği**: Karanlık tema desteği

## 🛠️ Teknolojiler

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Markdown**: Gray Matter, Remark
- **Date Formatting**: date-fns
- **Font**: Inter

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # Hakkımda sayfası
│   ├── blog/              # Blog sayfaları
│   ├── contact/           # İletişim sayfası
│   ├── projects/          # Projeler sayfası
│   └── page.tsx           # Ana sayfa
├── components/            # Reusable React bileşenleri
├── data/                  # Static veri dosyaları
├── lib/                   # Utility fonksiyonları
└── types/                 # TypeScript tip tanımları

content/
└── blog/                  # Markdown blog yazıları
```

## 🚀 Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm, yarn, pnpm veya bun

### Kurulum

1. Repository'yi klonlayın:
```bash
git clone <repository-url>
cd tncy-dev
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
# veya
pnpm install
# veya
bun install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📝 İçerik Yönetimi

### Blog Yazısı Ekleme

1. `content/blog/` dizinine yeni `.md` dosyası oluşturun
2. Dosyanın başına frontmatter ekleyin:

```markdown
---
title: "Blog Yazısının Başlığı"
description: "Kısa açıklama"
date: "2024-01-15"
author: "Yazar Adı"
tags: ["tag1", "tag2", "tag3"]
featured: true
---

# İçerik buraya gelir

Markdown formatında yazınızı yazabilirsiniz...
```

### Proje Ekleme

`src/data/index.ts` dosyasındaki `projects` array'ine yeni proje ekleyin:

```typescript
{
  id: "unique-id",
  title: "Proje Adı",
  description: "Proje açıklaması",
  technologies: ["React", "Next.js", "TypeScript"],
  demoUrl: "https://demo-url.com",
  githubUrl: "https://github.com/username/repo",
  featured: true
}
```

### Kişisel Bilgileri Güncelleme

`src/data/index.ts` dosyasındaki `personalInfo`, `experiences` ve `education` objelerini düzenleyin.

## 🎨 Özelleştirme

### Renk Teması

Tailwind CSS kullanılarak renk teması `tailwind.config.ts` dosyasından özelleştirilebilir.

### Font

Layout dosyasında Inter font kullanılmaktadır. Farklı font kullanmak için `src/app/layout.tsx` dosyasını düzenleyin.

## 📦 Derleme

Production için derleme:

```bash
npm run build
npm run start
```

## 🚀 Deploy

### Vercel (Önerilen)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=<repository-url>)

### Diğer Platformlar

- **Netlify**: `npm run build` sonrası `out` klasörünü deploy edin
- **GitHub Pages**: GitHub Actions ile otomatik deploy
- **Railway**: Otomatik Next.js algılama

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altındadır. Detaylar için `LICENSE` dosyasını inceleyin.

## 📞 İletişim

- **E-posta**: tuncay@example.com
- **GitHub**: [https://github.com/tuncay](https://github.com/tuncay)
- **LinkedIn**: [https://linkedin.com/in/tuncay](https://linkedin.com/in/tuncay)

---

⭐ Bu projeyi beğendiyseniz star vermeyi unutmayın!
