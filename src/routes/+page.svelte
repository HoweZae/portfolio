<script>
    import "../app.css";
    import "../global.css";

    import Article from "./Article.svelte";

    const link = {
        li: "https://www.linkedin.com/in/jedtomanan/",
        gh: "https://github.com/HoweZae",
        fb: "https://www.facebook.com/jedtomanan/",
        ig: "https://www.instagram.com/jose.tmnn/",
        twt: "https://x.com/howe_zae",
    }

    const header = [
        {logo: "/logo/li.png", color: "hover:to-cyan-200 active:from-cyan-300 active:to-cyan-300", link: link.li, handle: "jedtomanan"},
        {logo: "/logo/gh.svg", color: "hover:to-purple-200 active:from-purple-300 active:to-purple-300", link: link.gh, handle: "HoweZae"},
        {logo: "/logo/fb.png", color: "hover:to-blue-200 active:from-blue-300 active:to-blue-300", link: link.fb, handle: "jedtomanan"},
        {logo: "/logo/ig.png", color: "hover:to-red-100 active:from-red-200 active:to-red-200", link: link.ig, handle: "jose.tmnn"},
        {logo: "/logo/twt.png", color: "hover:to-sky-100 active:from-sky-200 active:to-sky-200", link: link.twt, handle: "howe_zae"},
    ]

    function linkClicked() {
        console.log("Link clicked. Hi mom!");
    }
</script>

<header class="flex">
    <img 
        class="mt-5 mr-4 ml-3 flex justify-center content-center h-60 border-double border-2 border-orange-300"
        src="/me.JPG"
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
            link="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Tackle Junior Head"
            subtitle="UP Association of Computer Science Majors (UP CURSOR)"
            other="September 2023 - March 2024"
        />

        <Article 
            link="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Engineering Committee Member"
            subtitle="UP Center for Student Innovations (UP CSI)"
            other="September 2023 - November 2023"
        />

        <Article 
            link="https://www.linkedin.com/in/jedtomanan/details/experience/"
            hoverColor="hover:text-cyan-500"
            title="Member Relations Head"
            subtitle="UP CURSOR"
            other="February 2023 - May 2023"
        />
    </section>

    <section class="basis-1/2 ml-3 mb-0">
        <h2 class="text-xl">What projects have I made?</h2>
        <h4>
            See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
        </h4>

        <Article 
            link="https://github.com/HoweZae/HoweZae"
            hoverColor="hover:text-slate-400"
            title="JoseTomanan.io"
            subtitle="Svelte + SvelteKit + Tailwind"
            other="My personal webpage-portfolio-resume (i.e., this webpage!)"
        />
        
        <!--
        <article>
            <h3 class="text-lg"><a
                class="hover:underline hover:text-slate-400"
                on:click|once={linkClicked}
                href="https://github.com/HoweZae/HoweZae">
                <i>JoseTomanan.io</i>
            </a></h3>
            <h4 class="italic">Svelte + SvelteKit + Tailwind</h4>
            <h5 class="text-slate-500 text-sm mt-1">My personal webpage-portfolio-resume (i.e., this webpage!)</h5>
        </article>
        -->

        <Article 
            link="https://tes-birth-rate.vercel.app"
            hoverColor="hover:text-orange-500"
            title="Poverty and Parenting: A Case Study"
            subtitle="Python: Pandas, Seaborn, Geopandas"
            other="Data science-backed analysis of birth rates in the Philippines"
        />

        <Article 
            link="https://docs.google.com/spreadsheets/d/1Gl8ZSLqoZOfrErq09FKBjBx0lInlYxXj3dCs48e-T_Q/edit?usp=sharing"
            hoverColor="hover:text-green-600"
            title="Finances Tracker"
            subtitle="Google Sheets + Apps Script"
            other="Personal spreadsheet with JS-powered macros"
        />
    </section>
</div>

<section>
    <h2 class="text-xl">What am I passionate about?</h2>
    <h4>
        In terms of computer science, ...
    </h4>
</section>

<section>
    <h2 class="text-xl">What do I do in my free time?</h2>
    <h4>
        Away from the keyboard, I take passion in hitting the gym, playing competitive video games, and playing basketball.
        I also used to pursue traditional drawing and guitar/keyboard playing as hobbies.
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