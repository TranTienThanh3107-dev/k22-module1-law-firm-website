import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html', // Trỏ thẳng đến file about.html ở thư mục gốc
            },
        },
    },
})