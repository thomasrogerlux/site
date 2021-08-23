<script lang="ts">
    import Contact from "$lib/Contact.svelte";
    import Header from "$lib/Header.svelte";
    import Page from "$lib/Page.svelte";
</script>

<Page>
    <Header slot="header" />
    <div slot="main">
        <p>Nothing to see yet!</p>
        <Contact />
    </div>
</Page>

<style>
    div {
        padding-top: 4rem;
    }

    p {
        padding-bottom: 4rem;
    }
</style>
