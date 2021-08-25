<div class="root">
    <div class="img-container">
        <img src="/illustration-face.png" alt="Thomas' face" height="128" />
    </div>
    <div class="text-container">
        <h1>👋 Thomas Roger Lux</h1>
        <p>is a Software Engineer based in Paris, France</p>
    </div>
</div>

<style>
    .root {
        padding-top: 2rem;
        border-bottom: 0.2rem solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .img-container {
        display: flex;
        flex-direction: row-reverse;
        height: 8rem;
        border-bottom: 0.2rem solid black;
    }

    img {
        margin-bottom: 0;
        height: 100%;
        transition: all 0.25s ease-in-out;
        transform-origin: bottom right;
    }

    @media (hover: hover) {
        img:hover {
            transform: scale(1.1);
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    h1 {
        margin-bottom: 0;
    }

    p {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 640px) {
        .root {
            flex-direction: row-reverse;
        }

        .img-container {
            border: none;
            height: 12rem;
        }
    }

    @media (min-width: 720px) {
        .root {
            padding-right: 5%;
        }
    }
</style>
