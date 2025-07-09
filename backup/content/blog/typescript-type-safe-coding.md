---
title: "TypeScript ile Tip Güvenli Kod Yazma"
description: "TypeScript kullanarak daha güvenli ve sürdürülebilir kod nasıl yazılır?"
date: "2024-01-10"
author: "Tuncay"
tags: ["TypeScript", "JavaScript", "Programming", "Types"]
featured: false
---

# TypeScript ile Tip Güvenli Kod Yazma

TypeScript, JavaScript'e statik tip kontrolü ekleyen güçlü bir programlama dilidir. Bu yazıda TypeScript'in temel özelliklerini ve avantajlarını keşfedeceğiz.

## TypeScript Nedir?

TypeScript, Microsoft tarafından geliştirilen ve JavaScript'e derlenen bir programlama dilidir. JavaScript'in tüm özelliklerini destekler ve bunlara ek olarak:

- **Statik Tip Kontrolü**
- **Interface Desteği**
- **Generic Types**
- **Decorator Support**
- **Advanced IDE Support**

## Interface Örneği

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
}

function createUser(userData: Omit<User, 'id' | 'createdAt'>): User {
  return {
    id: Math.random(),
    createdAt: new Date(),
    ...userData
  };
}

const newUser = createUser({
  name: "Ahmet Yılmaz",
  email: "ahmet@example.com",
  isActive: true
});
```

## Generic Function Örneği

```typescript
function getArrayItem<T>(array: T[], index: number): T | undefined {
  return array[index];
}

const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c"];

const numberItem = getArrayItem(numbers, 2); // type: number | undefined
const stringItem = getArrayItem(strings, 1); // type: string | undefined
```

## Utility Types

TypeScript'in sunduğu utility types ile daha esnek tip tanımları yapabilirsiniz:

```typescript
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserEmail = Pick<User, 'email'>;
type UserWithoutId = Omit<User, 'id'>;
```

## Sonuç

TypeScript, büyük projeler için vazgeçilmez bir araçtır. Kod kalitesini artırır ve bakım maliyetlerini düşürür.
