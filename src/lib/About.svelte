<script lang="ts">
    import IsometricCard from "./IsometricCard.svelte";

    const infos = [
        {
            title: "Tech",
            description:
                "Tech enthusiast, eager to learn new way of doing things. I'm the kind of guy with a 3D printer at home and a Raspberry Pi plugged into my router."
        },
        {
            title: "Work",
            description:
                "Software engineer at Qantev. It's an insurtech startup based in Paris, where we are all working very hard to produce a solid SaaS for medical networks."
        },
        {
            title: "Life",
            description:
                "Film photographer on my spare time, I found a liking for analog tech such as film cameras, turntables and slide projectors. Guitar's also a big thing for me, always have one nearby."
        },
        {
            title: "Education",
            description:
                "Self-taught developer at heart, I still did a formal education in computer science with a master's degree at Epitech, in Nice and Paris, France. I also got the chance to attend one full year at Inha University in Incheon, South Korea, as an exchange student in computer engineering."
        },
        {
            title: "Skills",
            description:
                "Fullstack currently trying to learn new stuff in Go, Rust and Svelte. Main proficiency being TypeScript stacks such as React, Angular or Node. Devops believer, I know my Docker, my Ansible, Terraform and CI. Studied C/C++ and ASM during my student years."
        }
    ];
</script>

<section>
    <ul>
        {#each infos as info}
            <li>
                <IsometricCard hover>
                    <h2>{info.title}</h2>
                    <p>{info.description}</p>
                </IsometricCard>
            </li>
        {/each}
    </ul>
</section>

<style>
    ul {
        padding-top: 4rem;
        padding-bottom: 4rem;
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        line-height: 1.75;
    }

    h2 {
        margin-top: 0;
    }
</style>
