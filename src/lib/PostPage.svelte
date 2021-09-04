<!-- Cannot use TypeScript in MDsveX layout file: https://github.com/pngwn/MDsveX/issues/116 -->
<script>
    import Header from "./Header.svelte";
    import IsometricBox from "./IsometricBox.svelte";
    import IsometricCard from "./IsometricCard.svelte";
    import Page from "./Page.svelte";

    export let title;
    export let description;
    export let thumbnail;
</script>

<Page>
    <Header slot="header" {title} {description} />
    <div class="content" slot="main">
        <IsometricBox>
            <img src={thumbnail} alt={title} height="128" />
        </IsometricBox>
        <div class="post">
            <slot />
        </div>
    </div>
</Page>

<style>
    .content {
        padding-top: 2rem;
        padding-bottom: 2rem;
        line-height: 0;
    }

    .post {
        line-height: 1.75;
    }

    img {
        width: 100%;
        height: 24rem;
        object-fit: cover;
    }
</style>
