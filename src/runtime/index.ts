export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const pixelId = config.tiktokPixelId;

  if (!pixelId) {
    console.warn('TikTok Pixel ID is not defined in the runtime config.');
    return;
  }

  // Initialize TikTok Pixel
  !function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    w[t] = w[t] || function () {
      (w[t].q = w[t].q || []).push(arguments);
    };
    w[t].l = 1 * new Date();
    const script = d.createElement('script');
    const firstScript = d.getElementsByTagName('script')[0];
    script.src = `https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=${pixelId}`;
    firstScript.parentNode.insertBefore(script, firstScript);
  }(window, document, 'ttq');

  // Add $ttq method to the Nuxt app
  nuxtApp.provide('ttq', window.ttq);
});