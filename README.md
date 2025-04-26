# Nuxt TikTok Pixel Module

This module provides an easy way to integrate the TikTok Pixel into your Nuxt 3 application. You can specify your TikTok Pixel ID in the Nuxt configuration and use the `$ttq` method to track events throughout your application.

## Installation

To install the module, run the following command:

```bash
npm install nuxt-tiktok-pixel
```

or

```bash
yarn add nuxt-tiktok-pixel
```

## Configuration

Add the module to your `nuxt.config.js` file and specify your TikTok Pixel ID:

```javascript
export default {
	modules: ["nuxt-tiktok-pixel"],
	tiktokPixel: {
		pixelId: "YOUR_PIXEL_ID",
	},
};
```

Replace `YOUR_PIXEL_ID` with your actual TikTok Pixel ID.

## Updated Usage

Once the module is installed and configured, you can use the `$ttq` method in your components and pages to track events. For example, to track an "Add to Cart" event, you can do the following:

```javascript
import { useNuxtApp } from "#app";

const { $ttq } = useNuxtApp();
$ttq("AddToCart", {
	content_id: "12345",
	content_type: "product",
	value: 29.99,
	currency: "USD",
});
```

This method ensures that `$ttq` is easily accessible throughout your application.

## Available Events

You can track various events using the `$ttq` method. Some common events include:

- `AddToCart`
- `Purchase`
- `ViewContent`
- `CompleteRegistration`

Refer to the [TikTok Pixel documentation](https://ads.tiktok.com/marketing_api/docs?rid=1) for a complete list of events and their parameters.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
