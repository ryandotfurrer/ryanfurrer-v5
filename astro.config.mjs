import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl'
// import { loadEnv } from 'vite';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    }
  },
  integrations: 
  [
    react(), 
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
    storyblok({
      accessToken: "OvG6RltzzmQpZ8WXKtSeEwtt",
      apiOptions: {      
        // Choose your Storyblok space region
        region: 'us', // optional,  or 'eu' (default)
      },
      components: {
        // Add your components here
        blogPost: 'storyblok/BlogPost',
        blogPostList: 'storyblok/BlogPostList',
        page: 'storyblok/Page'
      },
    }),
  ]
});