<script>
    import "../app.css";
    import "../global.css";

    import Article from "./Article.svelte";

    import * as helpers from "$lib";

    const link = helpers.link;
    const header = helpers.header;
    const linkClicked = helpers.linkClicked;

    import {tweened, spring} from "svelte/motion";
</script>

<header class="flex">
    <img 
        class="mt-5 mr-4 ml-3 flex justify-center content-center h-60 border-double border-4 border-sky-700"
        src="/images/me.JPG"
        alt="Me"
    />
    <section class="grow mb-0">
        <h1 class="text-3xl ml-3 mt-3 mb-2 font-bold italic">
            Hey, ya! I'm Jose Tomanan.
        </h1>
        <h4 class="text-lg ml-3">
            I am a BS Computer Science junior student from the University of the Philippines Diliman.
            <br> Thanks for visiting this page, it's nice to meet you!
            <br> Feel free to get to know me better through the following platforms:
        </h4>
        <div class="flex mt-3">
        {#each header as image}
            <a href={image.link}
                class="basis-1/4 flex justify-center
                    bg-gradient-to-r from-slate-100 to-slate-100 to-75%
                    hover:from-slate-100
                    {image.color}
                    mx-2 p-2 rounded-xl"
            ><img class="h-8" src={image.logo} alt="Logo" /></a>
        {/each}
        </div>
    </section>
</header>

<div class="flex">
    <section class="basis-1/2 mr-3 mb-0">
        <h2 class="text-xl">What have I been up to?</h2>
        <h4>
            See everything I've done, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
        </h4>

        <Article 
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Tackle Junior Head"
            subtitle="UP Association of Computer Science Majors (UP CURSOR)"
            other="September 2023 - March 2024"
            on:click|once={ linkClicked }
        />

        <Article 
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Dev Training Program Contributor"
            subtitle="UP Center for Student Innovations (UP CSI)"
            other="September 2023 - November 2023"
            on:click|once={ linkClicked }
        />

        <Article 
            href="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Member Relations Head"
            subtitle="UP CURSOR"
            other="February 2023 - May 2023"
            on:click|once={ linkClicked }
        />
    </section>

    <section class="basis-1/2 ml-3 mb-0">
        <h2 class="text-xl">What projects have I made?</h2>
        <h4>
            See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
        </h4>

        <Article 
            href="https://github.com/HoweZae/HoweZae"
            hoverColor="hover:text-sky-500 italic"
            title="JoseTomanan.io"
            subtitle="Svelte + SvelteKit + Tailwind"
            other="My personal webpage-portfolio-resume (i.e., this webpage!)"
            on:click|once={ linkClicked }
        />
        
        <Article 
            href="https://tes-birth-rate.vercel.app"
            hoverColor="hover:text-orange-500"
            title="Poverty and Parenting: A Data Science Study"
            subtitle="Python: Pandas, Seaborn, Geopandas"
            other="Economic analysis of birth rates in the Philippines"
            on:click|once={ linkClicked }
        />

        <Article 
            href="https://docs.google.com/spreadsheets/d/1Gl8ZSLqoZOfrErq09FKBjBx0lInlYxXj3dCs48e-T_Q/edit?usp=sharing"
            hoverColor="hover:text-green-600"
            title="Finances Tracker"
            subtitle="Google Sheets + Apps Script"
            other="Personal spreadsheet with JS-powered macros"
            on:click|once={ linkClicked }
        />
    </section>
</div>

<section>
    <h2 class="text-xl">What am I passionate about?</h2>
    <h4>
        In terms of computer science, out of all the options I have explored thus far, I have taken the most interest in <b>automation</b>.
        I like seeing mundane tasks get accomplished by programs written in 5 minutes.
        <br>
        To me, this is the biggest advantage that learning programming has brought:
        improving productivity and saving time.
    </h4>
</section>

<section>
    <h2 class="text-xl">What do I do in my free time?</h2>
    <h4>
        Away from the keyboard, I take passion in hitting the gym, playing basketball, and playing video games.
        I also used to pursue traditional drawing and guitar/keyboard playing as other ways to spend my time productively.
    </h4>
    <h4>
        I am also an avid Swiftie since 2016, and I'd bet my left leg I know more about Taylor Swift than you!
    </h4>
</section>

<section>
    <h2 class="text-xl mb-2">Where can you find me?</h2>
    <div class="flex">
        <h5 class="basis-1/3 flex justify-center bg-gradient-to-r hover:from-slate-100 hover:to-slate-100 p-2 rounded-xl mr-2">
            jdtomanan@up.edu.ph
        </h5>
        <h5 class="basis-1/3 flex justify-center bg-gradient-to-r hover:from-slate-100 hover:to-slate-100 p-2 rounded-xl">
            +63 947 301 3664
        </h5>
        <h5 class="basis-1/3 flex justify-center bg-gradient-to-r hover:from-slate-100 hover:to-slate-100 p-2 rounded-xl ml-2">
            Jose Ernesto Tomanan (LinkedIn)
        </h5>
    </div>
</section>

<section>
    <h4 class="text-white-900 text-justify">
        This page is written with Svelte and Tailwind.
        If you haven't noticed, I tried to fill out this web page with as much of my knowledge as possible.
        Feel free to use <b>Inspect Element</b> to see how I made this!
    </h4>
</section>