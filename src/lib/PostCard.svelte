<script lang="ts">
    import { format } from "date-fns";
    import type { Post } from "$utils/posts";
    import IsometricCard from "./IsometricCard.svelte";
    import Tag from "./Tag.svelte";

    export let post: Post;

    const thumbnail = `/blog/${post.metadata.thumbnail}`;
</script>

<IsometricCard hover padding={false}>
    <img src={thumbnail} alt={post.metadata.title} width={128} />
    <div class="header">
        <Tag text={post.metadata.category} />
        <p>{format(post.metadata.date, "yyyy-MM-dd")}</p>
    </div>
    <div class="content">
        <h2>{post.metadata.title}</h2>
        <p>{post.metadata.description}</p>
    </div>
    <div class="footer">
        <a sveltekit:prefetch href={post.slug}><p>Read Article</p></a>
    </div>
</IsometricCard>

<style>
    img {
        width: 100%;
        border-bottom: 0.2rem solid var(--accent-color);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 0.2rem solid var(--accent-color);
    }

    .header > p {
        margin: 0;
    }

    .content {
        padding: 1rem;
        line-height: 1.75;
    }

    .content > h2 {
        margin-top: 0;
    }

    .content > p {
        margin-bottom: 0;
    }

    .footer {
        position: relative;
        border-top: 0.2rem solid var(--accent-color);
    }

    .footer > a {
        position: relative;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        display: block;
        box-sizing: border-box;
        padding: 0.1rem;
        text-decoration: none;
        width: 100%;
        color: var(--accent-color);
        transition: 0.2s ease-in-out;
        z-index: 2;
    }

    .footer::before {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--accent-color);
        transition: 0.2s ease-in-out;
        transform: scaleY(0);
        transform-origin: bottom;
        border: 0.2rem solid var(--accent-color);
        z-index: 1;
    }

    .footer:hover::before {
        transform: scaleY(1);
    }

    .footer:hover > a {
        color: var(--background-color);
    }
</style>
