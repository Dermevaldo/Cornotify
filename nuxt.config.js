module.exports = {
	mode: 'spa',
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/img/icon.png' }
		]
	},
	loading: {
		color: '#FF0000'
	},
	build: {
		extractCSS: true
	},
	modules: [
		['@nuxtjs/pwa']
	],
	manifest: {
		name: "Cornotify",
		short_name: "Cornotify",
		theme_color: "#1976D2",
		background_color: "#1976D2",
		display: "standalone",
		orientation: "any",
		scope: "/",
		start_url: "/",
		description: "Um novo conceito em chifre"
	},
	icon: {
		iconSrc: 'static/img/icon.png'
	},
	generate: {
		dir: 'docs'
	}
}