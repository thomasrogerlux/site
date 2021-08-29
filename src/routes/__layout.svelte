<script>
    import "../styles/global.css";
    import "../styles/normalize.css";
</script>

<slot />

<style>
    :global(:root) {
        --background-color: white;
        --text-color: black;
        --light-text-color: #757575;
        --accent-color: black;

        color: var(--text-color);
        background: var(--background-color);
    }

    :global(a) {
        color: var(--light-text-color);
    }
</style>
