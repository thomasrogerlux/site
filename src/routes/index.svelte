<script lang="ts">
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Header from "$lib/Header.svelte";
    import Page from "$lib/Page.svelte";
</script>

<svelte:head>
    <title>Thomas Roger Lux | Software Engineer</title>
</svelte:head>

<Page>
    <Header slot="header" />
    <svelte:fragment slot="main">
        <About />
        <Contact />
    </svelte:fragment>
</Page>

<style>
</style>
