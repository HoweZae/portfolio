<script>
    import Article from "$lib/components/Article.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
    import ClickToCopy from "$lib/components/ClickToCopy.svelte";

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    let name = "";
    let email = "";
    let message = "";

    let startPage = false;

    const link = {
        li: "https://www.linkedin.com/in/jedtomanan/",
        gh: "https://github.com/HoweZae",
        fb: "https://www.facebook.com/jedtomanan/",
        ig: "https://www.instagram.com/jose.tmnn/",
        twt: "https://x.com/howe_zae",
        resume: "https://flowcv.com/resume/hsjhe4q16a"
    }

    const header = [
        {logo: "/logo/li.png", color: "hover:from-cyan-100 hover:to-cyan-300", link: link.li, handle: "jedtomanan"},
        {logo: "/logo/gh.svg", color: "hover:from-purple-100 hover:to-purple-300", link: link.gh, handle: "HoweZae"},
        {logo: "/logo/fb.png", color: "hover:from-blue-100 hover:to-blue-300", link: link.fb, handle: "jedtomanan"},
        {logo: "/logo/ig.png", color: "hover:from-red-50 hover:to-red-200", link: link.ig, handle: "jose.tmnn"},
        {logo: "/logo/twt.png", color: "hover:from-sky-50 hover:to-sky-200", link: link.twt, handle: "howe_zae"},
    ]

    /**
     * @param {string} id
     */
    function linkClicked(id) {
        console.log("Link clicked...");

        if (id != null) {
            const link = document.getElementById(id);
            // @ts-ignore
            link.classList.add("text-violet-800", "underline");
        }
    }

    /**
     * @param {string} name
     * @param {string} email
     * @param {string} message
     */
     function submitForm(name, email, message) {
        alert(`Submitted ${name}, ${email} with message: ${message}`);
    }

    // const hoverButton = tweened(0, {
    //     duration: 500,
    //     easing: elasticOut
    // });

    onMount(() => {
        startPage = true;
    });
</script>

<svelte:head>
    <title>Jose Tomanan</title>
    <meta name="description" content="Jose's portfolio" />
</svelte:head>

<page class="mt-16 h-auto gap-0.5 fade-in" transition:fade>
    <jumpable id="top" />
    <section class="grow flex flex-col gap-4 items-center justify-between overflow-hidden rounded-t-lg rounded-b-none p-0 pb-4 mt-4">
        <Carousel />

        <div class="flex flex-col gap-0.5 items-center justify-center">
            <h1 class="text-2xl">Jose Tomanan</h1>
            <h3 class="text-slate-500">CS major / Web developer / Student leader / Fashionista / Gym rat</h3>
        </div>
    </section>

    <section class="shrink flex flex-col gap-2 rounded-t-none rounded-b-lg items-baseline">
        <h4>
            Hey! I am Jose, a BS Computer Science junior at the University of the Philippines - Diliman.
            <a
                class="inline-flex gap-1.5 hover:gap-3 underline underline-offset-2 text-slate-500 hover:text-sky-500 transition-all ease-out" 
                href="./resume-20240824.pdf" target="_blank"
            >
                See my resume
                <svg 
                    class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>
        </h4>

        <div class="flex gap-1 w-full px-2">
            {#each header as image}
                <button type="button" class="grow flex justify-center bg-gradient-to-b from-white to-white {image.color} active:from-slate-100 active:to-slate-100 p-2 rounded-xl transition ease-out hover:scale-110">
                    <a href={ image.link } target="_blank">
                        <img class="h-8" src={image.logo} alt="Logo" />
                    </a>
                </button>
            {/each}
        </div>
    </section>
</page>

<page class="h-auto gap-0.5">
    <jumpable id="me" />
    <section class="grow flex flex-col gap-1.5 mt-3.5 rounded-b-none">
        <h2>What do I do?</h2>
        <p>
            As a CS major, my course has given me the privilege to explore the different options available in the tech industry.
            This institution has given me the chance to learn about <i>data science</i>, <i>software development</i>, and <i>database systems</i>.
            While nothing in particular stood out to me personally, I was enjoying the act of learning a new skill by creating something from what I have learned.
        </p>

        <!-- <div class="h-24 flex gap-2 items-center justify-center text-center">
            <div class="grow">3</div>
            <div class="grow">6</div>
            <div class="grow">5</div>
        </div> -->
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

    <section class="grow flex flex-col gap-1.5 rounded-t-none">
        <p>
            When not working, however, I prefer to spend my time away from the keyboard than in front of it.
            I like to stay active and explore different things, but my favorite ways to spend my free time are with
            <a href="https://www.instagram.com/stories/highlights/17992555250680811/" class="underline underline-offset-2 hover:text-sky-500" target="_blank">weightlifting</a> and
            <a href="_blank" class="underline underline-offset-2 hover:text-sky-500" target="_blank">basketball</a>.
        </p>

        <p>
            I am also an 
            <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="underline underline-offset-2 hover:text-sky-500" target="_blank">avid Swiftie</a>: 
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
                on:click|once={ () => linkClicked("role1") }
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
                on:click|once={ () => linkClicked("role2") }
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
                on:click|once={ () => linkClicked("role3") }
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
            <Article 
                id="proj1"
                href="https://github.com/HoweZae/HoweZae"
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
                on:click|once={ () => linkClicked("proj1") }
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
                on:click|once={ () => linkClicked("proj2") }
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
                    Utilizes JavaScript to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
                "
                techInvolved={ ["Google Sheets", "JavaScript"] }
                on:click|once={ () => linkClicked("proj3") }
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