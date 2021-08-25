<script lang="ts">
    import Container from "./Container.svelte";
    import Footer from "./Footer.svelte";
</script>

<Container>
    <header>
        <slot name="header" />
    </header>
    <main>
        <slot name="main" />
    </main>
    <Footer />
</Container>
