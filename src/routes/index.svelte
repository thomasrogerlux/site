<script lang="ts">
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Header from "$lib/Header.svelte";
    import Page from "$lib/Page.svelte";
</script>

<Page>
    <Header slot="header" />
    <svelte:fragment slot="main">
        <About />
        <Contact />
    </svelte:fragment>
</Page>

<style>
</style>
