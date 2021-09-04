---
layout: blog
title: "🧰 Making a blog with Svelte"
description: "With a brand new v2 of my website, comes another random developer blog"
date: "2021-08-28"
thumbnail: "making-blog-with-svelte.jpg"
category: "software"
---

## What

If you found this article by some miracle, I guess you got driven here by some SEO so probably you already know what is [Svelte](https://svelte.dev/). For the others (who are not you obviously):
**It's just another JavaScript UI framework**, yay, exactly, same as good ol' React, Angular and Vue. With a twist though.

## Why

The huge selling point that got me in was:

> Svelte compiles your code to tiny, framework-less vanilla JS

So you're telling me I can write my code in a modern _frameworkish_ fashion while outputing a fast website? Yes please.
Actually, Svelte isn't a library (reminder: React DOM is a **120kb** library, Angular librar**ies** can go easily above **500kb**), Svelte is a compiler. So when it ouputs your website, your users won't have to download the entirety of Svelte's library in their browser, just your HTML, your CSS, and the JavaScript you actually wrote. At least that's the promise (we'll talk about that later).

## How

## Caveats

> \- Remember when I said no library to download for the client?
> \- Yeah
> \- Well yes but actually no

So in practice, Svelte with SvelteKit still has a (fairly small) runtime, and still generate JavaScript output even if you don't use any single piece of JS in your project.

As of the time I'm writing this article, this very website (which is a small codebase honestly) generates around **20kb** of JS code when compiled with the default config.

If you think about it, it makes sense actually, we got so much used to client-side navigation, partial pages updates and such cools stuff that _needs_ JS to work, that we forgot this kind of features aren't handled by the browser or some magic entity.

Thankfully, for projects that **really** don't need JavaScript (e.g. this very website, again), you can pass a bunch of options to the compiler to prevent it's generation:

-   `hydrate`: dictate if Svelte should be initializing it's runtime on top of the dom ([see documentation](https://kit.svelte.dev/docs#ssr-and-javascript-hydrate)).
-   `router`: enable client-side navigation ([see documentation](https://kit.svelte.dev/docs#ssr-and-javascript-router))

```js
const config = {
    kit: {
        target: "#svelte",
        adapter: adapter(),
        hydrate: false,
        router: false
    }
};
```

Changing those two options to false will (weirdly) still generate the JS code, but won't link it to the HTML files, yay!, (some [issue](https://github.com/sveltejs/kit/issues/1371) on GitHub reported this, but sadly it got closed).

If you want you can make a postbuild script to delete the JS files, but it's not _that_ usefull since he can't be send to the users anyway. Your choice.
