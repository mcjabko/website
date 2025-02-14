import js from '@eslint/js'
// @ts-expect-error
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  ignores: ['**/node_modules/**', '.next/**'],
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next'],
  }),
]

export default eslintConfig