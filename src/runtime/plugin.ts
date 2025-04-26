// src/runtime/plugin.ts

export default defineNuxtPlugin(nuxtApp => {
	const pixelId = nuxtApp.$config.tiktokPixelId;

	if (!pixelId) {
		console.warn("TikTok Pixel ID is not defined in nuxt.config.js");
		return;
	}

	// Initialize TikTok Pixel
	!(function (w, d, t) {
		w.TiktokAnalyticsObject = t;
		const ttq = (w[t] = w[t] || []);
		ttq.methods = [
			"page",
			"track",
			"identify",
			"instances",
			"debug",
			"on",
			"off",
			"once",
			"ready",
			"set",
			"get",
			"trackPageView",
			"trackEvent",
		];
		ttq.set = function (key, value) {
			ttq.push(["set", key, value]);
		};
		ttq.get = function (key) {
			return ttq.push(["get", key]);
		};
		ttq.push = function (args) {
			ttq.callMethod ? ttq.callMethod(args) : ttq.queue.push(args);
		};
		ttq.queue = [];
		const script = d.createElement("script");
		script.async = true;
		script.src = `https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=${pixelId}`;
		const firstScript = d.getElementsByTagName("script")[0];
		firstScript.parentNode.insertBefore(script, firstScript);
	})(window, document, "ttq");

	// Add $ttq method to the Nuxt app
	nuxtApp.provide("ttq", (eventName, params) => {
		window.ttq && window.ttq.track(eventName, params);
	});
});

// Добавляем экспорт $ttq через useNuxtApp
export const useNuxtApp = () => {
	const $ttq = (event: string, data: Record<string, any>) => {
		if (typeof window !== "undefined" && window.ttq) {
			window.ttq.track(event, data);
		}
	};

	return {
		$ttq,
	};
};
