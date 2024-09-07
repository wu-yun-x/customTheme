
// Element局部按需引入配置 
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入对应包
import ElementPlus from 'unplugin-element-plus/vite'
import path from "path";



export default defineConfig({
    base: '/',
    plugins: [
        vue(),


        // 按需引入配置
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        }),
        // 按需定制主题配置
        ElementPlus({
          useSource: true,
        }),


    ],
    resolve: {
        // 解决公共路径问题
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/index.scss" as *; `,
            },
        },
    },
    
})
