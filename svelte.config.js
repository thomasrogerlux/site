import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        target: "#svelte",
        adapter: adapter(),
        hydrate: false,
        router: false
    }
};

export default config;
