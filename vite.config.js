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
                about: './about.html',
                practice: './practice.html',
                blog: './blog.html',
                contact: './contact.html',
                404: './404.html',
            }
        },
    },
})