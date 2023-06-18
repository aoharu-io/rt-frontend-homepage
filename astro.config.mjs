import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";


const DEFAULT_LAYOUT = '/src/layouts/Main.astro';
function setDefaultLayout() {
  return function (_, file) {
    const {
      frontmatter
    } = file.data.astro;
    if (!frontmatter.layout) frontmatter.layout = DEFAULT_LAYOUT;
  };
}
;


// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [setDefaultLayout]
  },
  experimental: {
    assets: true
  },
  integrations: [mdx()]
});