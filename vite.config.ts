import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // 自定义构建输出目录
    target: 'es2020',
    lib: {
      entry: 'src/index.ts', // 入口文件路径
      formats: ['es'],
      name: 'ly-public-utils',
      fileName: 'index'
    }
  },
  server: {
    port: 8080 // 自定义开发服务器端口
  }
});
