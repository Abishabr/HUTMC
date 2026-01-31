import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import logo from '@/assets/Logo.PNG';

function setFaviconDataUrl(dataUrl, mime = 'image/svg+xml') {
	// set/update rel='icon' (with type) and rel='shortcut icon' for broader support
	const rels = [
		{ rel: 'icon', type: mime },
		{ rel: 'shortcut icon' },
	];

	rels.forEach(({ rel, type }) => {
		let el = document.querySelector(`link[rel='${rel}']`);
		if (!el) {
			el = document.createElement('link');
			el.rel = rel;
			if (type) el.type = type;
			document.head.appendChild(el);
		}
		el.href = dataUrl;
	});
}

function createCircularFaviconDataUrl(imageHref, size = 64) {
	const svg = `<?xml version="1.0" encoding="utf-8"?>\n` +
		`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'>` +
		`<defs><clipPath id='c'><circle cx='${size/2}' cy='${size/2}' r='${size/2}'/></clipPath></defs>` +
		`<image href='${imageHref}' width='${size}' height='${size}' clip-path='url(#c)' preserveAspectRatio='xMidYMid slice'/>` +
		`</svg>`;

	return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Primary: SVG data URL (circular)
setFaviconDataUrl(createCircularFaviconDataUrl(logo), 'image/svg+xml');
// Fallback: also set a PNG favicon pointing to the built image asset for browsers that don't render SVG favicons
setFaviconDataUrl(logo, 'image/png');

// Try to generate a circular PNG favicon from the logo at runtime (better cross-browser support)
function createPngCircularFavicon(imageSrc, size = 64) {
	return new Promise((resolve) => {
		try {
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = size;
				canvas.height = size;
				const ctx = canvas.getContext('2d');
				if (!ctx) return resolve(null);

				// clip a circle
				ctx.save();
				ctx.beginPath();
				ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
				ctx.closePath();
				ctx.clip();

				// draw the image to cover the canvas (object-fit: cover)
				const scale = Math.max(size / img.width, size / img.height);
				const sw = size / scale;
				const sh = size / scale;
				const sx = Math.max(0, (img.width - sw) / 2);
				const sy = Math.max(0, (img.height - sh) / 2);
				ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
				ctx.restore();

				resolve(canvas.toDataURL('image/png'));
			};
			img.onerror = () => resolve(null);
			img.src = imageSrc;
		} catch (e) {
			resolve(null);
		}
	});
}

createPngCircularFavicon(logo).then((dataUrl) => {
	if (dataUrl) {
		setFaviconDataUrl(dataUrl, 'image/png');
	}
});

createRoot(document.getElementById("root")).render(<App />);