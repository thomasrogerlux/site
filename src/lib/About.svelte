<script lang="ts">
    import IsometricCard from "./IsometricCard.svelte";

    const infos = [
        {
            title: "💾 Tech",
            description:
                "Tech enthusiast, eager to learn new ways of doing things. I'm the kind of guy with a 3D printer at home and a Raspberry Pi plugged into my router."
        },
        {
            title: "💻 Work",
            description:
                "Software engineer at Ledger, exploring the crypto world and what's really behind Web 3.0. Working on open source projects like the Ledger Live wallet."
        },
        {
            title: "📸 Life",
            description:
                "Film photographer in my spare time. I found a love for analog tech such as film cameras, turntables and slide projectors. I'm also an amateur guitarist, with a liking for classic rock & blues."
        },
        {
            title: "🎓 Education",
            description:
                "Self-taught developer at heart. I still did a master's degree in computer science at Epitech, in Nice and Paris, France. I also got the chance to attend one full year at Inha University in Incheon, South Korea, as an exchange student in computer engineering. However, I learn most techs by myself by doing side projects (like this website)."
        },
        {
            title: "💪 Skills",
            description:
                "Fullstack web developper. I'm currently trying to learn new stuff in Go, Rust and Svelte. My main proficiency is with TypeScript based stacks such as React, Angular or Node. Devops believer, I know my Docker, my Ansible, Terraform and CI. Studied C/C++ and ASM during my student years."
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
