<script lang="ts">
    import IsometricBox from "./IsometricBox.svelte";

    export let hover = false;
    export let padding = true;
</script>

<div class:hover>
    <IsometricBox>
        <div class:padding>
            <slot />
        </div>
    </IsometricBox>
</div>

<style>
    .padding {
        padding: 1rem;
    }

    .hover {
        transition: all 0.25s ease-in-out;
    }

    @media (hover: hover) {
        .hover:hover {
            transform: rotate(-5deg) scale(1.1);
        }
    }
</style>
