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

<div class="flex">
    <div class="h-52 w-52 rounded-lg border-double border-4 border-sky-600 mr-2 p-1">
        <img 
            class="rounded-sm"
            src="/images/me.JPG"
            alt="Me"
        />
    </div>
    <section class="flex flex-col justify-between grow my-0 p-6">
        <h1 class="text-3xl font-bold italic">
            Heya! I'm Jose Tomanan.
        </h1>
        <h4 class="text-lg">
            I am a 3rd year BS Computer Science student from University of the Philippines Diliman.
            <br>
            Thanks for visiting! Get to know me more:
        </h4>
        <div class="flex gap-2">
        {#each header as image}
            <button type="button" class="grow flex justify-center bg-gradient-to-b from-white to-white {image.color} active:from-slate-100 active:to-slate-100 p-2 rounded-xl transition ease-out hover:scale-110">
                <a 
                    href={ image.link }
                    target="_blank"
                    on:focus={ buttonHover }
                >
                    <img class="h-8" src={image.logo} alt="Logo" />
                </a>
            </button>
        {/each}
        </div>
    </section>
</div>

<section>
    <h2>What do I do?</h2>
    <p>
        As a CS major, I explore everything tech-related; i.e., finding new technology then digging into its rabbit hole.
        My journey has led me to <b>UI/UX design</b> which has piqued my interest the most:
        other than making things pretty, I appreciate studying the psychology behind what makes users engage more.
        I've found a passion in creating highly intuitive designs that present and market themselves.
    </p>
</section>

<div class="flex gap-x-4">
    <section class="basis-1/2 my-0">
        <h2>What have I been up to?</h2>
        <h4>
            See everything I've done, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
        </h4>

        <Article 
            id="role1"
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Tackle Junior Head"
            subtitle="UP Association of Computer Science Majors (UP CURSOR)"
            other="September 2023 - March 2024"
            on:click|once={ () => linkClicked("role1") }
        />

        <Article 
            id="role2"
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Dev Training Program Contributor"
            subtitle="UP Center for Student Innovations (UP CSI)"
            other="September 2023 - November 2023"
            on:click|once={ () => linkClicked("role2") }
        />

        <Article 
            id="role3"
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Member Relations Head"
            subtitle="UP CURSOR"
            other="February 2023 - May 2023"
            on:click|once={ () => linkClicked("role3") }
        />
    </section>

    <section class="basis-1/2 my-0">
        <h2>What projects have I made?</h2>
        <h4>
            See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
        </h4>

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
    </section>
</div>

<section class="text-justify">
    <h2>What else am I passionate about?</h2>
    <p>
        Away from the keyboard, I take passion in hitting the gym, playing basketball, and playing video games.
        I am also an avid Swiftie: I'd bet my left leg I know more about Taylor Swift than you!
    </p>
</section>

<div class="flex gap-x-4">
    <section class="basis-2/5 mt-0">
        <h2>Contact me:</h2>

        <div class="flex flex-col my-1">
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
                rows=3 name="message" placeholder="Say something..."
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
</div>