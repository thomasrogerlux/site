<script lang="ts">
    export let title: string;
    export let description: string;
    export let avatar: boolean = true;
</script>

<div class="root" class:reverse-root={avatar}>
    {#if avatar}
        <div class="img-container">
            <img src="/illustrations/face.png" alt="Thomas' face" height="128" />
        </div>
    {/if}
    <div class="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div class="navigation-container">
            <a href="/">/home</a>
            <a href="/blog">/blog</a>
        </div>
    </div>
</div>

<style>
    .root {
        padding-top: 2rem;
        border-bottom: 0.2rem solid var(--accent-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .reverse-root {
        justify-content: space-between;
    }

    .img-container {
        display: flex;
        flex-direction: row-reverse;
        height: 8rem;
        border-bottom: 0.2rem solid var(--accent-color);
    }

    img {
        margin-bottom: 0;
        height: 100%;
        transition: all 0.25s ease-in-out;
        transform-origin: bottom right;
    }

    @media (hover: hover) {
        img:hover {
            transform: scale(1.1);
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 1rem;
    }

    h1 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 640px) {
        .reverse-root {
            flex-direction: row-reverse;
        }

        .img-container {
            border: none;
            height: 100%;
        }

        .root {
            height: 12rem;
        }
    }

    @media (min-width: 720px) {
        .root {
            padding-right: 5%;
        }
    }
</style>
