<script>
    import Article from "./Article.svelte";
    import ClickToCopy from "./ClickToCopy.svelte";

    import { link, linkClicked } from "$lib";

    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    // const hoverButton = tweened(0, {
    //     duration: 500,
    //     easing: elasticOut
    // });
</script>

<div class="flex">
    <section class="basis-1/2 mr-3 mb-0">
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

    <section class="basis-1/2 ml-3 mb-0">
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
    <h2>What am I passionate about?</h2>
    <h4 class="my-2">
        In terms of computer science, out of all the options I have explored thus far, I have taken the most interest in <b>UI/UX design</b>.
        Other than making things pretty, I also appreciate studying the psychology behind what makes users engage more.
        My goal is to create highly intuitive designs that present themselves 
    </h4>
    <h4>
        Away from the keyboard, I take passion in hitting the gym, playing basketball, and playing video games.
        I am also an avid Swiftie since 2016: I'd bet my left leg I know more about Taylor Swift than you!
    </h4>
</section>

<section>
    <h2 class="mb-2">Where can you find me?</h2>
    <div class="flex">
        <ClickToCopy content="jdtomanan@up.edu.ph" 
            on:dblclick={ ()=>{ navigator.clipboard.writeText("jdtomanan@up.edu.ph") }} />
        <ClickToCopy content="+63 947 301 3664" 
            on:dblclick={ () => { navigator.clipboard.writeText("+639473013664") }} />
        <ClickToCopy content="Jose Ernesto Tomanan (LinkedIn)" 
            on:dblclick={ () => { navigator.clipboard.writeText("Jose Ernesto Tomanan") }} />
    </div>
</section>