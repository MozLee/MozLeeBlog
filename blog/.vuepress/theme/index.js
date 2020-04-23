
module.exports = {
  extend: '@vuepress/theme-default',
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }],
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  }
}
// module.exports = (themeConfig, ctx) => {
//   return {
//      // ...
//   }
// }
