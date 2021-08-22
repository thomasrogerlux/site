<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Page from "$lib/Page.svelte";
</script>

<Page>
    <Header slot="header" />
    <div slot="main">Nothing to see yet!</div>
</Page>

<style>
    div {
        padding-top: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
