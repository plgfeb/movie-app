import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  alias({
    find: '@',
    replacement: resolve(resolve(projectRootDir, 'src'))
  })
  ],
})
