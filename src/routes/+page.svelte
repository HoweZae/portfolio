<script>
    import Header from "./Header.svelte";

    import Article from "$lib/components/Article.svelte";
    import ClickToCopy from "$lib/components/ClickToCopy.svelte";
    import { link } from "$lib";

    import { onMount } from "svelte";
    // import { fade } from "svelte/transition";
    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    let name = "";
    let email = "";
    let message = "";
    let startPage = false;

    /**
     * @param {string} name
     * @param {string} email
     * @param {string} message
     */
     function submitForm(name, email, message) {
        alert(`Submitted ${name}, ${email} with message: ${message}`);
    }

    onMount(() => {
        startPage = true;
    });
</script>

<svelte:head>
    <title>Jose Tomanan</title>
    <meta name="description" content="Jose's portfolio" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>

{#if startPage}
    <Header />
{/if}

<page class="h-auto gap-0.5">
    <jumpable id="me" />
    <section class="flex flex-col gap-1.5 mt-3.5 rounded-b-none">
        <h2>What do I do?</h2>
        <p>
            As a CS major, my course has given me the privilege to explore the different options available in the tech industry.
            This institution has given me the chance to learn about <i>data science</i>, <i>software development</i>, and <i>database systems</i>.
            While nothing in particular stood out to me personally, I was enjoying the act of learning a new skill by creating something from what I have learned.
        </p>
        <!-- TODO: something to visualize -->

        <p class="italic font-bold">It was almost like the journey is part of the destination.</p>
        <!-- TODO: something to visualize -->

        <p>
            Right now, I am currently immersing myself in the field of <i>UI/UX design</i>;
            I appreciate diving into the psychology behind what drives users into clicking buttons.
            I long to be able to make a career out of this path that I enjoy.
        </p>
        <!-- TODO: something to visualize -->
    </section>

    <section class="flex flex-col gap-1.5 rounded-t-none">
        <p>
            When not working, however, I prefer to spend my time away from the keyboard than in front of it.
            I like to stay active and explore different things, but my favorite ways to spend my free time are with
            <a href="https://www.instagram.com/stories/highlights/17992555250680811/" class="hoverable-link" target="_blank">weightlifting</a> and
            <a href="_blank" class="hoverable-link" target="_blank">basketball</a>.
        </p>

        <p>
            I am also an 
            <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="hoverable-link" target="_blank">avid Swiftie</a>: 
            I'd bet my left leg I know more about Taylor Swift than you!
        </p>
    </section>
</page>

<page class="h-auto">
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

<page class="h-auto">
    <jumpable id="projects" />
    <section class="basis-1/2 flex flex-col gap-2">
        <div class="gap-1">
            <h2>What projects have I made?</h2>
        </div>
        
        <div class="flex flex-col gap-2 mx-2">
            <!-- 
            <Article 
                id="proj0"
                href="_blank"
                title="Food"
                subtitle="Food app"
                date="AUG 2024 - PRESENT"
                other="
                    ,,,
                    Made in compliance for the requirements of course CS 191 and 192: Software Engineering I and II.
                "
                techInvolved={ ["Svelte", "PHP"] }
                on:click|once={ () => linkClicked("proj0") }
            /> 
            -->
            <Article 
                id="proj1"
                href="https://github.com/HoweZae/portfolio"
                color="sky-500"
                title="JoseTomanan.io"
                subtitle="Personal portfolio-resume (i.e., this webpage!)"
                date="JUL 2024 - PRESENT"
                other="
                    A static single-page website that showcases the relevant skills I have developed throughout my learning journey.
                    Also created to demonstrate front-end tech learned and to practice my UI/UX design choices.
                    Written using Svelte and Tailwind, to prioritize the webpage's responsiveness and intuitiveness.
                    Used supplementary JavaScript and CSS to add more complex functionality.
                "
                techInvolved={ ["Svelte", "Tailwind", "JavaScript", "CSS"] }
            />
            <Article 
                id="proj2"
                href="https://tes-birth-rate.vercel.app"
                color={"orange-500"}
                title="Poverty and Parenting: A Data Science Study"
                subtitle="Economic analysis of birth rates in the Philippines"
                date="FEB 2024 - JUN 2024"
                other="
                    A visual exploration study, done using data science Python packages: Pandas, Seaborn, Geopandas.
                    Uses data science concepts to find an association between registered live births and poverty incidence in each municipality, as well as data visualization techniques to make the results intuitive and easily digestible.
                    Conducted in compliance for the requirements of course CS 132: Data Science.
                "
                techInvolved={ ["Python"] }
            />
            <Article 
                id="proj3"
                href="https://docs.google.com/spreadsheets/d/1Gl8ZSLqoZOfrErq09FKBjBx0lInlYxXj3dCs48e-T_Q/edit?usp=sharing"
                color="green-600"
                title="Finances Tracker"
                subtitle="Personal spreadsheet with Apps Script-powered macros"
                date="FEB 2023 - PRESENT"
                other="
                    A Google Docs spreadsheet created for the purpose of tracking college life-related expenses.
                    Uses separate sheets for incoming and outgoing funds, and summarizes all history of expenses and savings in a master sheet.
                    Utilizes JavaScript (via Google Apps Script) to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
                "
                techInvolved={ ["Google Sheets", "JavaScript"] }
            />
        </div>

        <h6 class="text-slate-400 text-right">
            // See my public repositories, in full detail, at 
            <a class="underline hover:text-sky-500" href={link.gh}>GitHub</a>.
        </h6>
    </section>
</page>

<!-- <page class="h-auto">
    <jumpable id="hobbies" />
</page> -->

<page class="h-auto flex-row">
    <jumpable id="contact" class="-mx-2" />
    <section class="basis-2/5">
        <h2>Contact me:</h2>

        <div class="flex flex-col">
            <ClickToCopy content="jdtomanan@up.edu.ph"
                on:click={ ()=>{ navigator.clipboard.writeText("jdtomanan@up.edu.ph") }} />

            <ClickToCopy content="+63 947 301 3664"
                on:click={ () => { navigator.clipboard.writeText("+639473013664") }} />

            <ClickToCopy content="In: jedtomanan"
                on:click={ () => { navigator.clipboard.writeText("jedtomanan") }} />

            <ClickToCopy content="fb: Jose Ernesto Tomanan"
                on:click={ () => { navigator.clipboard.writeText("Jose Ernesto Tomanan") }} />
        </div>

        <!-- <h6 class="text-slate-400 italic text-right">(hover for copy button!)</h6> -->
    </section>

    <section class="basis-3/5 gap-y-2">
        <h2>Or send me a message:</h2>

        <div class="flex gap-2 py-1">
            <form class="basis-5/12 flex gap-2 justify-between">
                <label for="name">Name: </label>
                <input 
                    name="name" type="text" class="input-sm caret-sky-500" placeholder="Your Name" 
                    bind:value={ name }
                >
            </form>

            <form class="basis-7/12 flex gap-2 justify-between">
                <label for="email">Email: </label>
                <input 
                    name="email" type="email" class="input-sm caret-sky-500" placeholder="yourname@email.com" 
                    bind:value={ email }
                >
            </form>
        </div>

        <form class="flex-col pb-2">
            <label for="message">Message:</label>
            <br>
            <textarea 
                class="block w-full font-['Avenir'] rounded-sm border-0 text-slate-700 ring-1 ring-inset ring-slate-300 p-1 caret-sky-500"
                rows=2 name="message" placeholder="Say something..."
                bind:value={ message }
            />
        </form>

        <form class="flex justify-end">
            <button
                class="border border-sky-500 bg-sky-500 hover:bg-white hover:text-sky-500 hover:underline underline-offset-2 rounded-md py-1 px-2.5 font-['Futura'] text-white transition ease-out"
                on:click={ ()=>{ submitForm(name, email, message) }}
                title="Work in progress"
            >
                Submit
            </button>
        </form>
    </section>
</page>

<style>
    .input-sm {
        @apply block w-full font-sans rounded-sm border-0 text-slate-700 ring-1 ring-inset ring-slate-300 px-1;
        /* @apply focus:ring-2 focus:ring-indigo-600; */
    }
    .input-sm::placeholder {
        @apply text-gray-400;   
    }
</style>