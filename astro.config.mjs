import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
// import { loadEnv } from 'vite';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    react(), 
    tailwind(),
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