import nextra from 'nextra';

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const config = {
  ...withNextra(),
  trailingSlash: true,
};

export default config;
