<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import { convertToPost } from "$utils/posts";

    export const load: Load = async ({ fetch }) => {
        const response = await fetch(`/posts.json`);
        const data = await response.json();

        return {
            props: {
                posts: data.map(convertToPost)
            }
        };
    };
</script>

<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Page from "$lib/Page.svelte";
    import PostCard from "$lib/PostCard.svelte";
    import type { Post } from "$utils/posts";

    export let posts: Post[];
</script>

<Page>
    <Header
        slot="header"
        title="📰 The Blog"
        description="is the place where I bore you with exciting stuff"
    />
    <svelte:fragment slot="main">
        <ul>
            {#each posts as post}
                <li>
                    <PostCard {post} />
                </li>
            {/each}
        </ul>
    </svelte:fragment>
</Page>

<style>
    ul {
        padding-top: 4rem;
        padding-bottom: 4rem;
        display: grid;
        gap: 4rem;
        /* When there will be a few articles, change to this and remove the media query */
        /* grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); */
        grid-template-columns: repeat(auto-fit, 1fr);
    }

    @media (min-width: 480px) {
        ul {
            grid-template-columns: repeat(auto-fit, 18rem);
        }
    }
</style>
