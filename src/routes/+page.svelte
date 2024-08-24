<script>
    import Article from "../lib/components/Article.svelte";
    import ClickToCopy from "../lib/components/ClickToCopy.svelte";
    import Carousel from "$lib/components/Carousel.svelte";

    import { link, header } from "$lib";
    import { buttonHover, linkClicked, submitForm } from "$lib";

    let name = "";
    let email = "";
    let message = "";

    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    // const hoverButton = tweened(0, {
    //     duration: 500,
    //     easing: elasticOut
    // });
</script>

<page class="mt-20 h-auto gap-1">
    <jumpable id="top"></jumpable>
    <section class="grow flex flex-col gap-4 items-center justify-between overflow-hidden rounded-t-lg rounded-b-none p-0 pb-4">
        <Carousel />

        <div class="flex flex-col gap-0.5 items-center justify-center">
            <h1 class="text-2xl">Jose Tomanan</h1>
            <h3 class="text-slate-500">CS major / Web developer / Student leader / Fashionista / Gym rat</h3>
        </div>
    </section>

    <section class="shrink flex flex-col gap-1 rounded-t-none rounded-b-lg">
        <p>Hey! I am Jose, a BS Computer Science junior at the University of the Philippines - Diliman.</p>

        <a class="flex items-center gap-2 text-slate-500 hover:text-sky-500 hover:gap-4 transition ease-out" href="./resume-20240824.pdf" target="_blank">
            <span class="font-semibold text-lg">Visit my resume</span>
            <svg 
                class="icon rotate-[45deg]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
            >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </a>

        <div class="flex gap-2 w-full px-2">
            {#each header as image}
                <button type="button" class="grow flex justify-center bg-gradient-to-b from-white to-white {image.color} active:from-slate-100 active:to-slate-100 p-2 rounded-xl transition ease-out hover:scale-110">
                    <a 
                        href={ image.link } target="_blank"
                        on:focus={ buttonHover }
                    >
                        <img class="h-8" src={image.logo} alt="Logo" />
                    </a>
                </button>
            {/each}
        </div>
    </section>
</page>

<page>
    <jumpable id="me"></jumpable>
    <section class="grow flex flex-col gap-1">
        <h2>What do I do?</h2>
        <p>
            As a CS major, my course has given me the privilege to explore the different options available in the tech industry.
            This institution has given me the chance to explore <i>data science</i>, <i>software development</i>, and <i>formal verification</i>.
        </p>
        <div class="h-32 flex gap-2 items-center justify-center">
            <div class="grow">
                3
            </div>
            <div class="grow">
                6
            </div>
            <div class="grow">
                5
            </div>
        </div>
        <!-- TODO: something to visualize -->

        <p>
            However, one thing I have realized is that, while nothing in particular stood out to me, I appreciated the <b>process of learning itself</b>.
            Especially in tech, I enjoyed the way that the things I learn along the way are immediately useful to me as I create something from it
        </p>
        <!-- TODO: something to visualize -->

        <p>
            Right now, I am currently exploring the field of <b>UI/UX design</b>; I enjoy diving into the psychology behind what drives users into clicking buttons.
        </p>
        <!-- TODO: something to visualize -->
    </section>
</page>

<page class="h-auto">
    <jumpable id="roles"></jumpable>
    <section class="basis-1/2 flex flex-col gap-2">
        <div class="gap-1">
            <h2>What have I been up to?</h2>
            <h4>
                See everything I've done, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
            </h4>
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
                    Wrote web development modules and exercises designed for 50+ UP CSI applicants.
                    Used Typst markdown language to automate structure and organization of content.
                    Collaborated using Git to streamline team workflow and consolidate collective output.
                "
                techInvolved={ ["Notion", "Google Sheets"] }
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
    </section>
</page>

<page class="h-auto">
    <jumpable id="projects"></jumpable>
    <section class="basis-1/2 flex flex-col gap-2">
        <div class="gap-1">
            <h2>What projects have I made?</h2>
            <h4>
                See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
            </h4>
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
                    A static single-page website that showcases the relevant skills I developed throughout my tech career.
                    Also created to demonstrate front-end tech learned and to practice my UI/UX design choices.
                    Written using Svelte and Tailwind, to prioritize the webpage's responsiveness and intuitiveness.
                "
                techInvolved={ ["Svelte", "Tailwind"] }
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
                    A visual exploration study, done using Python packages: Pandas, Seaborn, Geopandas.
                    Uses data science concepts to find an association between registered live births and poverty incidence of each municipality, and data visualization techniques to make the results intuitive and easily digestible.
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
                date="FEB 2022 - PRESENT"
                other="
                    A Google Docs spreadsheet created for the purpose of tracking college life-related expenses.
                    Uses separate sheets for incoming and outgoing funds, and summarizes all history of expenses and savings in a master sheet.
                    Utilizes JavaScript to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
                "
                techInvolved={ ["Google Sheets", "JavaScript"] }
                on:click|once={ () => linkClicked("proj3") }
            />
        </div>
    </section>
</page>

<page>
    <jumpable id="hobbies"></jumpable>
    <section class="flex flex-col gap-1 grow">
        <h2>What else do I do?</h2>
        <p>
            When not working, I prefer to spend my time away from the keyboard than in front of it.
        </p>
        <p>
            My favorite ways to spend my free time include hitting the gym, playing basketball, getting involved in fashion trends, and listening to podcasts.
        </p>
        <p>
            I am also an avid Swiftie: I'd bet my left leg I know more about Taylor Swift than you!
        </p>
    </section>
</page>

<page class="h-auto flex-row">
    <jumpable id="contact" class="-mx-2"></jumpable>
    <section class="basis-2/5 mt-0">
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

        <h6 class="text-slate-400 italic text-right">(hover for copy button!)</h6>
    </section>

    <section class="basis-3/5 mt-0 gap-y-2">
        <h2>Or send me a message:</h2>

        <div class="flex gap-2 py-1">
            <form class="basis-5/12 flex gap-2 justify-between">
                <label for="name">Name: </label>
                <input 
                    name="name" type="text" class="input_text_sm caret-sky-500" placeholder="Your Name" 
                    bind:value={ name }
                >
            </form>

            <form class="basis-7/12 flex gap-2 justify-between">
                <label for="email">Email: </label>
                <input 
                    name="email" type="email" class="input_text_sm caret-sky-500" placeholder="yourname@email.com" 
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
            ></textarea>
        </form>

        <form class="flex justify-end">
            <button
                class="bg-sky-500 hover:bg-sky-800 rounded-md py-2 px-4 text-base font-['Futura'] text-white transition ease-out"
                on:click={ ()=>{ submitForm(name, email, message) }}
            >
                Submit
            </button>
        </form>
    </section>
</page>