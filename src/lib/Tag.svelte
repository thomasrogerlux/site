<script lang="ts">
    export let text: string;
</script>

<div>
    <p>{text}</p>
</div>

<style>
    div {
        padding: 0.4rem;
        line-height: 1;
        color: var(--background-color);
        background: var(--accent-color);
    }

    p {
        font-size: 0.75rem;
        margin: 0;
        text-transform: uppercase;
    }
</style>
