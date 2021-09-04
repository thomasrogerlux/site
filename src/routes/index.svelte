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
    <Header
        slot="header"
        title="👋 Thomas Roger Lux"
        description="is a software engineer based in Paris, France"
        avatar
    />
    <svelte:fragment slot="main">
        <About />
        <Contact />
    </svelte:fragment>
</Page>
