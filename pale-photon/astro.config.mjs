import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";


export default defineConfig({
   site: 'friend2868.github.io',
  integrations: [tailwind(),  sitemap()]
});






// crafted by http://github.com/Jamship-io