interface TikTokPixelConfig {
  pixelId: string;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    tiktokPixel?: TikTokPixelConfig;
  }
}

declare global {
  interface Window {
    ttq: (event: string, properties?: Record<string, any>) => void;
  }
}