module.exports= [{
				text: '主页',
				link: '/'
			},
			{
				text: '编程笔记',
				items: [{
						text: 'html5+css3',
						link: '/code/html5+css3/'
					},
					{
						text: 'javascript',
						link: '/code/javascript/'
					},
					{
						text: 'less',
						link: '/code/less/'
					},
					{
						text: 'jquery',
						link: '/code/jquery/'
					},
					{
						text: 'BootStrap',
						link: '/code/bootstrap/'
					},
					{
						text: 'Vue-全家桶',
						items:[
							{text:'Vue',link:'/code/vue/'},
							{text:'Vue-Cli',link:'/code/vue/cli/'},
							{text:'Vue-Router',link:'/code/vue/router/'},
							{text:'Vue-Vuex',link:'/code/vue/vuex/'},
							{text:'Axios',link:'/code/vue/axios/'}
						]
					},
					{
						text: 'Node',
						link: '/code/node/'
					}
				]
			},
			{
				text: '开发工具',
				items:[
					{
						text:'git教程',
						link:'/devtools/git/'
					},
					{
						text:'Markdown教程',
						link:'/devtools/markdown/'
					},
					{
						text:'linux教程',
						link:'/devtools/linux/'
					}
				]
			},
      {
        text: '移动端APP开发',
        items: [
          {text: 'TODO-1', link: '/mobile/TODO1/'},
          {text: 'TODO-2', link: '/mobile/TODO2/'},
          {text: 'TODO-3', link: '/mobile/TODO3/'},
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/CoderMonkie/v-blog'
      }
		]