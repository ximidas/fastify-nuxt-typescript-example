module.exports = {
	srcDir: 'client/',
	mode: 'universal',
	/*
   ** Headers of the page
   */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	router: {
		routes: [
			{
				path: '/second',
				name: 'SecondPage',
				component: 'pages/second.vue'
			},
			{
				path: '/users',
				component: 'pages/users.vue',
				children: [
					{
						path: ':id?',
						component: 'pages/users/_id.vue',
						name: 'users-id'
					}
				]
			}
		]
	},
	typescript: {
		typeCheck: {
			eslint: true
		}
	},
	/*
   ** Customize the progress-bar color
   */
	loading: { color: '#fff' },
	/*
   ** Global CSS
   */
	css: [],
	/*
   ** Plugins to load before mounting the App
   */
	plugins: [],
	/*
   ** Nuxt.js dev-modules
   */
	buildModules: [],
	/*
   ** Nuxt.js modules
   */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt'
	],
	/*
   ** Build configuration
   */
	build: {
		/*
     ** You can extend webpack config here
     */
		extend(config: any, ctx: any) {}
	}
};
