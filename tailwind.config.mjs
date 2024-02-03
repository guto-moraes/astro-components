/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter var", sans-serif'],
			},
		},
	},
	plugins: [starlightPlugin()],
};
