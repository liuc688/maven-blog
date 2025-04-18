import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '尚硅谷 Maven',
  description: 'A VitePress Site',
  ignoreDeadLinks: true, // ✅ 禁用死链接检查
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '尚硅谷 Maven', link: '/notes/Maven依赖管理项目构建工具' },
    ],

    sidebar: [
      {
        text: '尚硅谷 Maven',
        items: [
          { text: '第一章 概述', link: '/notes/Maven依赖管理项目构建工具' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outline: {
      level: [2, 6],
      label: '🦋ON THIS PAGE',
    },
  },
});
