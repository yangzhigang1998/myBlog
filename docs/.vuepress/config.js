module.exports = {
	base: '/', //设置站点根路径
	lang: 'zh-CN',
	title: '杨志刚',
	description: '使用vuepress搭建个人博客',
	port: '7777', //端口号
	dest: "./dist", //博客部署时输出的文件夹
	head: [
		[
			"link",
			{
				"rel": "icon",
				"href": "/favicon.ico"
			}
		],
		[
			"meta",
			{
				"name": "viewport",
				"content": "width=device-width,initial-scale=1,user-scalable=no"
			}
		]
	],
	"markdown": {
		lineNumbers: true //显示markdown文档中代码片段的行数
	},
	locales: {
		// 键名是该语言所属的子路径
		// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/': {
			lang: 'en-US',
			title: 'VuePress',
			description: 'Vue-powered Static Site Generator',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'VuePress',
			description: 'Vue 驱动的静态网站生成器',
		},
	},
	darkMode: true,
	themeConfig: { //网站主题配置项
		logo: 'https://vuejs.org/images/logo.png',
		sidebar: 'auto', //是否开启侧边栏
		nav: require('./nav'), //顶部导航栏
		smoothScroll: true,
		sidebar: require('./sidebar.js'),
		locales: {
			'/': {
				selectLanguageName: 'English',
			},
			'/zh/': {
				selectLanguageName: '简体中文',
			},
		},
		"friendLink": [ // 友情链接
			{
				"title": "VuePress", //友联标题
				"desc": "Enjoy when you can, and endure when you must.", //友链描述
				"email": "", //友链邮箱
				"link": "https://vuepress.vuejs.org/zh/" //友链地址
			},
			{
				"title": "vuepress-theme-reco", //友联标题
				"desc": "A simple and beautiful vuepress Blog & Doc theme.", //友链描述
				"avatar": "/logo.png",
				"link": "https://vuepress-reco-doc.vercel.app" //友链地址
			}
		],
		"logo": "/touxiang.jpg",
		"search": true, //是否开启搜索
		"searchMaxSuggestions": 10, //最多的搜索建议条目
		"lastUpdated": "Last Updated", // 最后更新时间
		"author": "yangzghigang", //昵称, 也是底部版权信息
		"authorAvatar": "/touxiang.jpg", //头像
		"record": "xxxx", //备案信息
		"startYear": "2017", //开始年份
		"editLinkText": '在github上编辑此页！'
	}
}
