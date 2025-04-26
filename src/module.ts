import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-tiktok-pixel',
    configKey: 'tiktokPixel',
  },
  defaults: {
    pixelId: '',
  },
  setup(options, nuxt) {
    // Validate pixelId
    if (!options.pixelId) {
      throw new Error('TikTok Pixel ID is required. Please set it in your nuxt.config.js.');
    }

    // Add plugin
    nuxt.options.plugins.push(resolve(__dirname, 'runtime/plugin.ts'));

    // Add hooks if needed
    nuxt.hook('build:before', () => {
      // Custom build logic can go here
    });
  },
});