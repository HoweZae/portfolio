<script>
    import Article from "../lib/components/Article.svelte";
    import ClickToCopy from "../lib/components/ClickToCopy.svelte";

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

<page class="mt-14 h-auto gap-1">
    <section class="grow flex flex-col gap-2 items-center justify-between overflow-hidden rounded-t-lg rounded-b-none p-0 pb-4">
        <!-- TODO: MAKE CAROUSEL -->
        <img 
            class="h-[25rem] w-full object-cover border-b-sky-500 border-b-2"
            src="/images/header.jpg"
            alt="Me"
        />

        <div class="flex flex-col gap-1 items-center">
            <h1 class="text-2xl">Jose Tomanan</h1>
            <h3 class="text-slate-500">CS major / Web developer / Student leader / Fashionista / Gym rat</h3>
        </div>
    </section>

    <section class="shrink flex flex-col gap-1 rounded-t-none rounded-b-lg">
        <p>Hey! I am Jose, a BS Computer Science junior at the University of the Philippines - Diliman.</p>

        <a class="flex items-center gap-2 text-slate-500 hover:text-slate-400 hover:gap-4 transition ease-out" href={ link.resume }>
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
    <section class="grow flex flex-col gap-1">
        <h2>What do I do?</h2>
        <p>
            As a CS major, my course has given me the privilege to explore the different options available in the tech industry.
            I have explored <i>data science</i>, <i>software development</i>, and <i>formal verification</i>.
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

<page>
    <section class="basis-1/2 flex flex-col gap-1">
        <h2>What have I been up to?</h2>
        <h4>
            See everything I've done, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
        </h4>

        <div class="flex flex-col gap-2">
            <Article 
                id="role1"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                hoverColor="hover:text-cyan-500"
                title="Tackle Junior Head"
                subtitle="UP Association of Computer Science Majors (UP CURSOR)"
                date="SEP 2023 - MAR 2024"
                other="..."
                on:click|once={ () => linkClicked("role1") }
            />
            <Article 
                id="role2"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                hoverColor="hover:text-cyan-500"
                title="Dev Training Program Contributor"
                subtitle="UP Center for Student Innovations (UP CSI)"
                date="SEP 2023 - NOV 2023"
                other="..."
                on:click|once={ () => linkClicked("role2") }
            />
            <Article 
                id="role3"
                href="https://www.linkedin.com/in/jedtomanan/details/experience/"
                hoverColor="hover:text-cyan-500"
                title="Member Relations Head"
                subtitle="UP CURSOR"
                date="FEB 2023 - MAY 2023"
                other="..."
                on:click|once={ () => linkClicked("role3") }
            />
        </div>
    </section>
</page>

<page>
    <section class="basis-1/2 flex flex-col gap-1">
        <h2>What projects have I made?</h2>
        <h4>
            See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
        </h4>
        
        <div class="flex flex-col gap-2">
            <Article 
                id="proj1"
                href="https://github.com/HoweZae/HoweZae"
                hoverColor="hover:text-sky-500 italic"
                title="JoseTomanan.io"
                subtitle="Svelte + SvelteKit + Tailwind"
                other="My personal webpage-portfolio-resume (i.e., this webpage!)"
                on:click|once={ () => linkClicked("proj1") }
            />
            <Article 
                id="proj2"
                href="https://tes-birth-rate.vercel.app"
                hoverColor="hover:text-orange-500"
                title="Poverty and Parenting: A Data Science Study"
                subtitle="Python: Pandas, Seaborn, Geopandas"
                other="Economic analysis of birth rates in the Philippines"
                on:click|once={ () => linkClicked("proj2") }
            />
            <Article 
                id="proj3"
                href="https://docs.google.com/spreadsheets/d/1Gl8ZSLqoZOfrErq09FKBjBx0lInlYxXj3dCs48e-T_Q/edit?usp=sharing"
                hoverColor="hover:text-green-600"
                title="Finances Tracker"
                subtitle="Google Sheets + Apps Script"
                other="Personal spreadsheet with JS-powered macros"
                on:click|once={ () => linkClicked("proj3") }
            />
        </div>
    </section>
</page>

<page>
    <section class="flex flex-col gap-1 grow">
        <h2>What else do I do?</h2>
        <p>
            When not working, I prefer to spend my time away from the keyboard than in front of it;
            my favorite ways to spend my free time include hitting the gym, playing basketball, getting involved in fashion, and listening to podcasts.
        </p>
        <p>
            I am also an avid Swiftie: I'd bet my left leg I know more about Taylor Swift than you!
        </p>
    </section>
</page>

<page class="h-auto flex-row">
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
                    name="name" type="text" class="input_text_sm" placeholder="Your Name" 
                    bind:value={ name }
                >
            </form>

            <form class="basis-7/12 flex gap-2 justify-between">
                <label for="email">Email: </label>
                <input 
                    name="email" type="email" class="input_text_sm" placeholder="yourname@email.com" 
                    bind:value={ email }
                >
            </form>
        </div>

        <form class="flex-col pb-2">
            <label for="message">Message:</label>
            <br>
            <textarea 
                class="block w-full font-['Avenir'] rounded-sm border-0 text-slate-700 ring-1 ring-inset ring-slate-300 p-1"
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