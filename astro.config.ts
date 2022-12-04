import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import astroLayouts from "astro-layouts";

// https://astro.build/config
export default defineConfig({
  site: "https://basicblog.lanceross.xyz",
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  
  base: "/",
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    tailwind(),
    sitemap(),
    mdx({
      remarkPlugins: [
        [
          astroLayouts,
          {
            default: "@layouts/Layout.astro",
            posts: "@layouts/BlogLayout.astro",
          },
        ],
      ],
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});