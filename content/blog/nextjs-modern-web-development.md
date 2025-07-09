---
title: "LoRa ile Uzun Mesafeli IoT İletişimi"
description: "LoRa teknolojisi kullanarak düşük güç tüketimli, uzun menzilli IoT ağları nasıl kurulur?"
date: "2024-01-15"
author: "Tuncay"
tags: ["LoRa", "LoRaWAN", "IoT", "ESP32", "Wireless"]
featured: true
---

# LoRa ile Uzun Mesafeli IoT İletişimi

LoRa (Long Range), düşük güç tüketimi ile uzun mesafeli iletişim sağlayan bir wireless teknolojisidir. Bu yazıda LoRa'nın temel özelliklerini ve ESP32 ile nasıl kullanılacağını inceleyeceğiz.

## LoRa'nın Avantajları

LoRa teknolojisi IoT uygulamaları için ideal özelliklere sahiptir:

- **Uzun Menzil**: Açık alanda 15km'ye kadar iletişim
- **Düşük Güç Tüketimi**: Yıllarca pil ömrü
- **Düşük Maliyet**: Uygun fiyatlı modüller
- **Penetrasyon**: Binalar arası iletişim
- **Scalability**: Binlerce node desteği

## ESP32 LoRa Bağlantısı

ESP32 ile LoRa modülü bağlantı şeması:

```c
import React from 'react';

interface Props {
  title: string;
  description: string;
}

const BlogPost: React.FC<Props> = ({ title, description }) => {
  return (
    <article className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </article>
  );
};

export default BlogPost;
```

## API Route Örneği

```javascript
// pages/api/posts.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      posts: [
        { id: 1, title: 'İlk Post', content: 'Bu ilk postumuz.' }
      ]
    });
  }
}
```

## Custom Hook Örneği

```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('LocalStorage error:', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('LocalStorage error:', error);
    }
  };

  return [storedValue, setValue] as const;
}
```

## Server Actions ile Form Handling

```typescript
// app/contact/actions.ts
'use server';

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validation
  if (!name || !email || !message) {
    throw new Error('Tüm alanlar zorunludur');
  }

  // Process form data
  try {
    await fetch('https://api.example.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    
    redirect('/thank-you');
  } catch (error) {
    throw new Error('Form gönderilirken hata oluştu');
  }
}
```

## CSS Modules ile Styling

```css
/* styles/Button.module.css */
.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.secondary:hover {
  background: #667eea;
  color: white;
}
```

## Sonuç

Next.js, modern web geliştirme için mükemmel bir seçenektir. Performans, SEO ve geliştirici deneyimi açısından büyük avantajlar sunar.

**Temel avantajları:**
- Otomatik kod bölme
- Optimized görüntü yükleme
- Built-in CSS desteği
- TypeScript entegrasyonu
- Excellent developer experience
