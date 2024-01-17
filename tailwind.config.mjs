/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/preline/dist/*.js',],
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
			'gray': { 
				'50': '#f9fafb', 
				'100': '#f3f4f6', 
				'200': '#e5e7eb', 
				'300': '#d1d5db', 
				'400': '#9ca3af', 
				'500': '#6b7280', 
				'600': '#4b5563', 
				'700': '#374151',
				'800': '#1f2937', 
				'900': '#111827', 
				'950': '#030712',
			},
			'azul': '#011957',
			'white': '#FFFFFF',
			'black': '#000000',
			transparent: 'transparent',
			current: 'currentColor',
			
		}
	},
	plugins: [
		require('preline/plugin'),
	],
}
