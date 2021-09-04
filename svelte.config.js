import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx", ".md"],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: [".svx", ".md"],
            smartypants: false,
            layout: {
                blog: "./src/lib/PostPage.svelte"
            }
        })
    ],
    kit: {
        target: "#svelte",
        adapter: adapter(),
        hydrate: false,
        router: false,
        vite: {
            resolve: {
                alias: {
                    $utils: resolve("./src/utils")
                }
            }
        }
    }
};

export default config;
