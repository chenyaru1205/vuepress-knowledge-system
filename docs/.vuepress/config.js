module.exports = {
  title: '前端知识体系',
  description: '前端知识体系文档',
  themeConfig: {
    nav: [
      // {
      //   text: "首页",
      //   link: ''
      // },
      {
        text: "知识体系",
        items: [
          { text: '1_浏览器详解', link: '/knowledge-system/01_brower.md'},
          { text: '2_计算机的网络基础', link: '/knowledge-system/02_network.md'},
          { text: '3_HTML超文本标记语言', link: '/knowledge-system/03_html.md'},
          { text: '4_CSS折叠样式表', link: '/knowledge-system/04_css.md'},
          { text: '5_JS的基础知识', link: '/knowledge-system/05_JSBasic.md'},
          { text: '6_前端框架vue', link: '/knowledge-system/06_vue.md'},
          { text: '7_前端框架react', link: '/knowledge-system/07_react.md'},
          { text: '8_微前端', link: '/knowledge-system/08_micro_front.md'},
          { text: '9_打包工具', link: '/knowledge-system/09_pack.md'},
          { text: '10_node服务端', link: '/knowledge-system/10_node.md'},
          { text: '11_多端开发', link: '/knowledge-system/11_multi_terminal.md'},
          { text: '12_数据结构', link: '/knowledge-system/12_data_structure.md'}
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
    sidebar: [
      {
        title: '1_浏览器详解',   // 必要的
        path: '/knowledge-system/01_brower.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true // 可选的, 默认值是 true,
      },
      {
        title: '2_计算机的网络基础', 
        path: '/knowledge-system/02_network.md',     
        collapsable: true 
      },
      {
        title: '3_HTML超文本标记语言',
        path: '/knowledge-system/03_html.md',
        collapsable: true
      },
      {
        title: '4_CSS折叠样式表',
        path: '/knowledge-system/04_css.md',
        collapsable: true
      },
      {
        title: '5_JS的基础知识', 
        path: '/knowledge-system/05_JSBasic.md',
        collapsable: true
      },
      {
        title: '6_前端框架vue',
        path: '/knowledge-system/06_vue.md',
        collapsable: true
      },
      {
        title: '7_前端框架react',
        path: '/knowledge-system/07_react.md',
        collapsable: true
      },
      {
        title: '8_微前端',
        path: '/knowledge-system/08_micro_front.md',
        collapsable: true
      },
      {
        title: '9_打包工具',
        path: '/knowledge-system/09_pack.md',
        collapsable: true
      },
      {
        title: '10_node服务端',
        path: '/knowledge-system/10_node.md',
        collapsable: true
      },
      {
        title: '11_多端开发',
        path: '/knowledge-system/11_multi_terminal.md',
        collapsable: true
      },
      {
        title: '12_数据结构',
        path: '/knowledge-system/12_data_structure.md',
        collapsable: true
      },
    ]
  }
}