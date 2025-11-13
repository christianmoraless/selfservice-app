import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // ** 1. REGLA CLAVE PARA IGNORAR/ADVERTIR SOBRE VARIABLES/IMPORTS NO USADOS **
      // Cambiamos el error (que viene del preset) a una 'warn' o 'off'
      '@typescript-eslint/no-unused-vars': [
        'warn', // Cambiado de 'error' (por defecto en el recomendado) a 'warn'
        {
          argsIgnorePattern: '^_',      // Ignora argumentos que empiezan por _ (ej: (error, _) => {})
          varsIgnorePattern: '^_',      // Ignora variables que empiezan por _
          caughtErrorsIgnorePattern: '^ignore', // Ignora errores de catch que se llaman 'ignore...'
        },
      ],

      // ** 2. Opcional: Desactivar la necesidad de tipado explícito (aunque no es recomendado para TS) **
      // '@typescript-eslint/explicit-module-boundary-types': 'off', 
      // ** 3. Opcional: Cambiar 'no-explicit-any' a advertencia o desactivarlo **
      '@typescript-eslint/no-explicit-any': 'off,

      // Reglas de React Hooks
      ...reactHooks.configs.recommended.rules,

      // Regla de React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)