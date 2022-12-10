import { defineUserConfig } from "vuepress";
// import { webpackBundler } from "@vuepress/bundler-webpack";
// import { defineUserConfig } from "@vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { path } from "@vuepress/utils";
import theme from "./theme";
export default defineUserConfig({
  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "瓜皮屋文档",
  // 网站描述
  description:
    "瓜皮屋出品的各种攻略文档都在这里哦",

  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  theme,
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 修改页面模板，@vuepress-theme-hope/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: ["**/*.md", "!_temp", "!.vuepress", "!node_modules"],

  plugins: [
    //樱花特效
    // 禁止复制选择
    // docsearchPlugin({
    //   indexName: "newzone",
    //   appId: "M4EXXEZIEG",
    //   apiKey: "fd8891a9c4cc21e0ef4f11bf44f7a11e",
    // }),
    // 禁用复制
    copyrightPlugin({
      // 插件选项
      global: true,
      disableCopy: true,
      disableSelection: true,
    }),
    // 本地搜索：默认情况下，该插件会将页面标题和小标题作为搜索索引。
    searchProPlugin({
      // 配置选项
      indexContent: true,
      //hotKeys: [{key: 'k', ctrl: true}],
      locales: {
        "/": {
          // 覆盖 placeholder
          placeholder: "开始搜索",
        },
      },
      delay: 500,
    }),
    googleAnalyticsPlugin({
      id: "G-RWKZTY2P9R",
    }),
    
  ],
});