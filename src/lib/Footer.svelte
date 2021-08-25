<div class="img-container">
    <img src="/illustration-work.png" alt="Thomas working" height="128" />
</div>
<footer>
    <p>Made with ❤️ in France © Thomas Roger Lux</p>
    <p>Illustrations drawn by EnPitSu © Lucas Vilard</p>
    <p>
        Look at the source code on <a href="https://github.com/thomasrogerlux/site">GitHub</a>
    </p>
</footer>

<style>
    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

    img {
        height: 8rem;
        transition: all 0.25s ease-in-out;
        transform-origin: bottom;
    }

    img:hover {
        transform: scale(1.1);
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-top: 4rem;
        padding-bottom: 4rem;
        background: black;
        color: white;
    }

    a {
        color: lightgray;
    }

    @media (min-width: 640px) {
        img {
            height: 12rem;
        }
    }
</style>
