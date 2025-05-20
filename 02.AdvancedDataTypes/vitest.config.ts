import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
        reporters: ['default', 'verbose'],
        globals: true,
        environment: 'node',
    },
})