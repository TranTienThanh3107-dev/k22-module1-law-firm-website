# Law Firm Website — Module 1 (K22)

Website giới thiệu công ty luật (Law Firm), xây dựng theo mô hình **multi-page application (MPA)** với **Vite** và **Tailwind CSS v4**. Layout được cắt từ thiết kế Figma, giao diện responsive cho cả mobile và desktop.

## 1. Tổng quan

- Đồ án Module 1 lớp K22.
- Website tĩnh gồm 5 trang chính: Home, About, Practice Areas, Blog, Contact.
- Không sử dụng JS framework; toàn bộ giao diện là HTML5 + Tailwind CSS.

## 2. Các trang

| Trang | File | Nội dung |
| --- | --- | --- |
| Home | `index.html` | Trang chủ — hero section, thanh điều hướng, số điện thoại liên hệ |
| About | `about.html` | Giới thiệu công ty |
| Practice Areas | `practice.html` | Lĩnh vực hoạt động |
| Blog | `blog.html` | Tin tức & bài viết |
| Contact | `contact.html` | Trang liên hệ |

## 3. Công nghệ sử dụng

- **[Vite](https://vite.dev/)** — build tool & dev server với Hot Module Replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first CSS framework, tích hợp qua plugin `@tailwindcss/vite`.
- **HTML5** — cấu trúc multi-page thuần, không dùng framework JS.
- **Google Fonts** — `Roboto Slab` (serif, heading) và `Manrope` (sans, body).
- **Assets** — icon SVG và hình ảnh WebP đặt trong thư mục `img/`.

## 4. Design tokens (`src/style.css`)

```css
@theme {
    --spacing: 10px;                 /* đơn vị spacing tùy chỉnh */
    --width-mobile: 335px;
    --color-primary: #017848;        /* xanh lá chủ đạo (Home) */
    --color-primary-about: #FD6038;  /* cam — trang About */
    --color-hero: #F7EAC8;           /* gradient hero (trái) */
    --color-hero-right: #FED464;     /* gradient hero (phải) */
    --font-sans: "Manrope", sans-serif;
    --font-serif: "Roboto Slab", serif;
}
```

- Base font-size: `62.5%` (1rem = 10px), cỡ chữ body mặc định `1.6rem`.
- Component class tái sử dụng (ví dụ `.btn-primary`) được định nghĩa trong `@layer components`.

## 5. Cài đặt & chạy dự án

Yêu cầu: Node.js 18 trở lên.

```bash
# Cài dependencies
npm install

# Chạy dev server (có HMR)
npm run dev

# Build production
npm run build

# Xem thử bản build
npm run preview
```

## 6. Cấu trúc thư mục

```
├── index.html          # Trang chủ
├── about.html          # Giới thiệu
├── practice.html       # Lĩnh vực hoạt động
├── blog.html           # Blog
├── contact.html        # Liên hệ
├── img/                # Hình ảnh & icon SVG/WebP
├── src/
│   └── style.css       # Tailwind v4 + theme tokens + components
├── vite.config.js      # Cấu hình Vite (multi-page input)
└── package.json
```

---

*Bài tập Module 1 — K22. Layout được cắt từ thiết kế Figma, responsive theo breakpoint `lg` của Tailwind.*
