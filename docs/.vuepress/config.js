module.exports = {
  base: '/vuepress-knowledge-system/',
  lang: 'zh-CN',
  title: '前端知识体系',
  description: '前端知识体系文档',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'vuepress-knowledge-system'
      }
    }
  },
  themeConfig: {
    nav: [
      // {
      //   text: "首页",
      //   link: ''
      // },
      {
        text: "知识体系",
        items: [
          { text: '1_浏览器详解', link: '/knowledge-system/01_brower/index.md'},
          { text: '2_计算机的网络基础', link: '/knowledge-system/02_network/index.md'},
          { text: '3_HTML超文本标记语言', link: '/knowledge-system/03_html/index.md'},
          { text: '4_CSS折叠样式表', link: '/knowledge-system/04_css/index.md'},
          { text: '5_JS的基础知识', link: '/knowledge-system/05_JSBasic/index.md'},
          { text: '6_前端框架vue', link: '/knowledge-system/06_vue/index.md'},
          { text: '7_前端框架react', link: '/knowledge-system/07_react/index.md'},
          { text: '8_微前端', link: '/knowledge-system/08_micro_front/index.md'},
          { text: '9_打包工具', link: '/knowledge-system/09_pack/index.md'},
          { text: '10_node服务端', link: '/knowledge-system/10_node/index.md'},
          { text: '11_多端开发', link: '/knowledge-system/11_multi_terminal/index.md'},
          { text: '12_数据结构', link: '/knowledge-system/12_data_structure/index.md'},
          { text: '13_git知识', link: '/knowledge-system/13_git/index.md'}
        ]
      },
      {
        text: "工具使用",
        items: [
          { text: 'test', link: '/tools-use/1.md'}
        ]
      },
      {
        text: "日常探索",
        items: [
          { text: 'test', link: '/daily-exploration/1.md'}
        ]
      }
    ],
    sidebarDepth: 10,
    sidebar: {
      '/knowledge-system/01_brower/': [{
        title: '浏览器详解',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/02_network/': [{
        title: '计算机的网络基础',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/03_html/': [{
        title: 'HTML超文本标记语言',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/04_css/': [{
        title: 'CSS折叠样式表',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/05_JSBasic/': [{
        title: 'JS的基础知识',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/06_vue/': [{
        title: '前端框架vue',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/07_react/': [{
        title: '前端框架react',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/08_micro_front/': [{
        title: '前端框架vue',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/09_pack/': [{
        title: '构建打包',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/10_node/': [{
        title: 'node服务端',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/11_multi_terminal/': [{
        title: '多端开发',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/12_data_structure/': [{
        title: '数据结构',
        collapsable: true,
        children: ['']
      }],
      '/knowledge-system/13_git/': [{
        title: 'git',
        collapsable: true,
        children: ['']
      }]
    }
  }
}