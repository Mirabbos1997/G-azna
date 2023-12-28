import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url';
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://subsidiya.mf.uz/',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => {
                    console.log(path)
                    return path.replace(/^\/api/, '/api')
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
