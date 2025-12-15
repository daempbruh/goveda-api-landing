import { defineConfig } from 'vite'

export default defineConfig({
  base: '/goveda-api-landing/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pricing: 'pricing/index.html',
        solutions_law: 'solutions/law-firms/index.html',
        solutions_legaltech: 'solutions/legaltech/index.html',
        solutions_tto: 'solutions/tech-transfer/index.html',
        solutions_offices: 'solutions/patent-offices/index.html',
        solutions_agencies: 'solutions/search-agencies/index.html',
        learn: 'learn/index.html',
      },
    },
  },
})
