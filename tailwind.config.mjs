/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'rosa': { 
				'50': '#fbf4f7', 
				'100': '#f8ebf0', 
				'200': '#f2d8e3', 
				'300': '#e7b5c9', 
				'400': '#d98daa', 
				'500': '#ca6a8b', 
				'600': '#b64c6c', 
				'700': '#9c3a55',
				'800': '#813347', 
				'900': '#6d2e3e', 
				'950': '#411621',
			},
			'azul': '#011957',
			'white': '#FFFFFF',
			'black': '#000000',
			transparent: 'transparent',
			current: 'currentColor',
			
		}
	},
	plugins: [],
}
