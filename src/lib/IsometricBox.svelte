<div class="container">
    <div class="box">
        <slot />
    </div>
</div>

<style>
    .container {
        position: relative;
        overflow: hidden;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }

    .box {
        position: relative;
        border: 0.2rem solid var(--accent-color);
        box-sizing: border-box;
        background: var(--background-color);
    }

    .box::before {
        content: "";
        background: var(--accent-color);
        position: absolute;
        width: 1.5rem;
        height: 110%;
        right: 0;
        top: 0.3rem;
        transform: translateX(100%) skewY(45deg);
    }

    .box::after {
        content: "";
        background: var(--accent-color);
        position: absolute;
        width: 110%;
        height: 1.5rem;
        left: 0.3rem;
        bottom: 0;
        transform: translateY(100%) skewX(45deg);
    }
</style>
