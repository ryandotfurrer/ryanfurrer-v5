import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@astrojs/react";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      wrap: true,
      langs: [
        "astro",
        "css",
        "docker",
        "dockerfile",
        "elixer",
        "gql",
        "graphql",
        "html",
        "javascript",
        "js",
        "json",
        "jsx",
        "less",
        "liquid",
        "lua",
        "markdown",
        "md",
        "nginx",
        "php",
        "postcss",
        "powershell",
        "ps",
        "py",
        "python",
        "rb",
        "rs",
        "ruby",
        "rust",
        "sass",
        "scss",
        "sql",
        "svelte",
        "swift",
        "toml",
        "ts",
        "tsx",
        "typescript",
        "vue-html",
        "vue",
        "vue",
        "yaml",
        "yml",
      ],
    },
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      open: "/src/pages/index.astro",
      https: true,
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    storyblok({
      accessToken: "OvG6RltzzmQpZ8WXKtSeEwtt",
      apiOptions: {
        // Choose your Storyblok space region
        region: "us", // optional,  or 'eu' (default)
      },
      components: {
        // Add your components here
        blogPost: "storyblok/BlogPost",
        blogPostList: "storyblok/BlogPostList",
        page: "storyblok/Page",
      },
    }),
  ],
});
