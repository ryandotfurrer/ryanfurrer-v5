import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@astrojs/react";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
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
