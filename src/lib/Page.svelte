<script lang="ts">
    import Container from "./Container.svelte";
    import Footer from "./Footer.svelte";
</script>

<Container>
    <div class="page">
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="main" />
        </main>
    </div>
</Container>
<Footer />

<style>
    .page {
        min-height: 100vh;
    }
</style>
