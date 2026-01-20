import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ColinHouse",
  description: "Sometimes, the simplest is the best.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // 暂时添加一个 Demo 链接，后续可以根据文件夹结构调整
      { text: 'Posts', link: '/posts/exam-experience' }
    ],

    sidebar: [
      {
        text: 'Recent Posts',
        items: [
          { text: '跨专业修考经验谈', link: '/posts/exam-experience' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ColinHouse/ColinHouse.github.io' }
    ],
    
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025-present ColinHouse'
    }
  }
})
