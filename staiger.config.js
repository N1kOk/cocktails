import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/pages/**'],
    rules: {
      'fsd/no-segmentless-slices': 'off',
    },
  },
])