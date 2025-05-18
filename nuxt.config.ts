// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
		  title: 'Reza & Desti | awan-dev',
		  meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Undangan pernikahan resmi Reza & Desti. Silakan RSVP dan temukan lokasi acara.' },
			{ name: 'author', content: 'Reza & Desti' },
			{ property: 'og:type', content: 'website' }
		  ],
		  link: [
			{ rel: 'icon', type: 'image/png', href: '/images/favicon.ico' }
		  ]
		}
	  },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
		  'Great Vibes': [400],
		  Montserrat:    [400, 600],
		  Lato: [100, 300],
		},
		display: 'swap',
		prefetch: true,
		preconnect: true,
	  },
	devtools: { enabled: true },
	compatibilityDate: "2024-11-01",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
});
