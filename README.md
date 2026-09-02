# Justice Law Firm Website ⚖️

Website giới thiệu công ty luật (Law Firm) được xây dựng bằng **Vite** và **Tailwind CSS v4**, thiết kế theo phong cách multi-page (MPA) với giao diện responsive cho cả mobile và desktop.

## 📄 Các trang

| Trang | File | Mô tả |
|---|---|---|
| **Home** | `index.html` | Trang chủ — *"Unbelievable Solutions For All Legal Cases"* với hero section, điều hướng, số điện thoại liên hệ |
| **About** | `about.html` | Giới thiệu — *"Seriously unbelievable client service"* |
| **Practice Areas** | `practice.html` | Lĩnh vực hoạt động — *"Tulsa Car Accident Attorney"* |
| **Blog** | `blog.html` | Tin tức / bài viết — *"Our Regular Blog"* |
| **Contact** | `contact.html` | Trang liên hệ |
| **404** | `404.html` | Trang báo lỗi không tìm thấy |

## 🛠️ Công nghệ sử dụng

- **[Vite 8](https://vite.dev/)** — build tool & dev server (HMR)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first CSS framework (qua plugin `@tailwindcss/vite`)
- **HTML5 thuần** — multi-page application, không dùng JS framework
- **Google Fonts** — `Roboto Slab` (serif, heading) & `Manrope` (sans, body)
- **SVG,WebP assets** — toàn bộ icon/hình ảnh nằm trong thư mục `img/`

## 🎨 Design tokens (trong `src/style.css`)

```css
@theme {
    --spacing: 10px;                 /* Đơn vị spacing tùy chỉnh */
    --width-mobile: 335px;
    --color-primary: #017848;        /* Xanh lá chủ đạo (Home) */
    --color-primary-about: #FD6038;  /* Cam — trang About */
    --color-hero: #F7EAC8;           /* Gradient hero (trái) */
    --color-hero-right: #FED464;     /* Gradient hero (phải) */
    --font-sans: "Manrope", sans-serif;
    --font-serif: "Roboto Slab", serif;
}
```

- Base font-size: `62.5%` (1rem = 10px), body text mặc định `1.6rem`.
- Component class tái sử dụng: `.btn-primary`, v.v. định nghĩa trong `@layer components`.

## 📂 Cấu trúc thư mục

```
├── index.html          # Trang chủ
├── about.html          # Giới thiệu
├── practice.html       # Lĩnh vực hoạt động
├── blog.html           # Blog
├── contact.html        # Liên hệ
├── 404.html            # Trang lỗi 404
├── img/                # SVG icons & hình ảnh
├── src/
│   ├── style.css       # Tailwind v4 + theme tokens + components
│   ├── main.js         # Entry JS (Vite scaffold demo)
│   ├── counter.js      # Vite scaffold demo
│   ├── tailwind.config.js
│   └── assets/         # Asset của Vite scaffold
├── vite.config.js      # Vite config (multi-page input)
└── package.json
```

## 🚀 Cài đặt & chạy

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

## 🧹 Việc có thể dọn dẹp

- `src/main.js`, `src/counter.js` và `src/assets/` hiện là code demo mặc định của Vite scaffold, không dùng cho các trang thực tế — có thể xoá nếu không cần.

---

*Bài tập Module 1 — K22. Layout được cắt từ thiết kế Figma, responsive theo breakpoint `lg` của Tailwind.*
