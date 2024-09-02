<script>
    import Article from "$lib/components/Article.svelte";
    import { fly } from "svelte/transition";
    import { link } from "$lib";
</script>

<page class="h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
    <jumpable id="roles" />
    <section class="basis-1/2 flex flex-col gap-2">
        <div class="gap-1">
            <h2>What have I been up to?</h2>
        </div>

        <div class="flex flex-col gap-2 mx-2">
            <Article 
                id="role1"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                color="cyan-500"
                title="Tackle Junior Head"
                subtitle="UP Association of Computer Science Majors (UP CURSOR)"
                date="SEP 2023 - MAR 2024"
                other="
                    Co-headed a team of 20 in planning, marketing, and promoting a 4-day hybrid setup tech career fair.
                    Lead the Branding & Creatives team to effectively design and market the event.
                    Lead the Human Resources to internally disseminate the event.
                    Used Notion workspace to efficiently implement task delegation, resource management, and team oversight.
                "
                techInvolved={ ["Notion", "Asana", "Google Sheets", "Canva"] }
            />
            <Article 
                id="role2"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                color="cyan-500"
                title="Dev Training Program Contributor"
                subtitle="UP Center for Student Innovations (UP CSI)"
                date="SEP 2023 - NOV 2023"
                other="
                    Wrote web development modules and exercises designed for 50+ UP CSI applicants, for app process 2324B.
                    Used Typst markdown to automate structure, layoutting, and organization of module content.
                    Collaborated using Git to streamline team workflow and consolidate collective output.
                "
                techInvolved={ ["Typst", "Git"] }
            />
            <Article 
                id="role3"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                color="cyan-500"
                title="Member Relations Head"
                subtitle="UP CURSOR"
                date="FEB 2023 - MAY 2023"
                other="
                    Headed a team of 6 in assuring and maintaining member involvement & motivation of an organization with 100+ active members.
                    Created publication material for CURSOR Cares, to encourage organization interaction.
                    Published material for Humans of CURSOR to share the experience of members in their respective fields.
                    Used Notion workspace to efficiently implement task delegation, resource management, and team oversight.
                "
                techInvolved={ ["Notion"] }
            />
        </div>

        <h6 class="text-slate-400 text-right">
            // See more of what I've done at
            <a class="underline underline-offset-2 hover:text-sky-500" href={link.li}>LinkedIn</a>.
        </h6>
    </section>
</page>