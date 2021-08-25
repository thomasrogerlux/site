<script lang="ts">
    const contacts = [
        {
            type: "Email",
            label: "thomas@rogerlux.dev",
            value: "mailto:thomas@rogerlux.dev"
        },
        {
            type: "GitHub",
            label: "github.com/thomasrogerlux",
            value: "https://github.com/thomasrogerlux"
        },
        {
            type: "LinkedIn",
            label: "linkedin.com/in/thomasrogerlux",
            value: "https://linkedin.com/in/thomasrogerlux"
        },
        {
            type: "Resume",
            label: "thomasrogerlux.pdf",
            value: "/documents/thomasrogerlux.pdf"
        }
    ];
</script>

<section>
    <h1>☎️ Contacts</h1>
    <ul>
        {#each contacts as contact}
            <li>
                <strong>{contact.type}</strong>:
                <a href={contact.value}>{contact.label}</a>
            </li>
        {/each}
    </ul>
</section>

<style>
    h1 {
        border-bottom: 0.2rem solid black;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    section {
        padding-bottom: 2rem;
    }
</style>
