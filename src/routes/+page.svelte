<script>
    import "../app.css";
    import "../global.css";

    const link = {
        li: "https://www.linkedin.com/in/jedtomanan/",
        gh: "https://github.com/HoweZae",
        fb: "https://www.facebook.com/jedtomanan/",
        ig: "https://www.instagram.com/jose.tmnn/",
        twt: "https://x.com/howe_zae",
    }

    const header = [
        {logo: "/logo/li.png", color: "hover:to-cyan-200", link: link.li, handle: "jedtomanan"},
        {logo: "/logo/gh.svg", color: "hover:to-purple-200", link: link.gh, handle: "HoweZae"},
        {logo: "/logo/fb.png", color: "hover:to-blue-200", link: link.fb, handle: "jedtomanan"},
        {logo: "/logo/ig.png", color: "hover:to-red-100", link: link.ig, handle: "jose.tmnn"},
        {logo: "/logo/twt.png", color: "hover:to-sky-100", link: link.twt, handle: "howe_zae"},
    ]
</script>

<section class="mb-0">
    <header class="flex">
        <img 
            class="flex justify-center content-center cmy-2 h-56 border-double border-2 border-orange-300"
            src="/me.JPG"
            alt="Me"
        />
        <div class="grow ml-3">
            <h1 class="text-3xl ml-1 mt-3 mb-2 font-bold italic">
                Hey, ya! I'm Jose Tomanan.
            </h1>
            <h4 class="text-lg ml-2">
                I am a BS Computer Science junior student from the University of the Philippines Diliman.
                <br> Thanks for visiting this page, it's nice to meet you!
                <br> Feel free to get to know me better through the following platforms:
            </h4>
            <div class="flex mt-3">
                {#each header as image}
                    <a href={image.link}
                        class="basis-1/4 flex justify-center
                            bg-gradient-to-r from-slate-100 to-slate-100 to-75%
                            hover:from-slate-100 active:from-slate-100
                            {image.color}
                            mx-2 p-2 rounded-xl"
                    ><img class="h-8" src={image.logo} alt="Logo" /></a>
                {/each}
                </div>
        </div>
    </header>
</section>

<div class="flex">
    <section class="basis-1/2 mr-3 mb-0">
        <h2 class="text-xl">What have I been up to?</h2>
        <h4>
            See everything I've done, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
            <!-- Here are my highlights: -->
        </h4>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">Tackle Junior Head</h3>
            <h4 class="italic">UP Association of Computer Science Majors (UP CURSOR)</h4>
            <h5 class="text-slate-500 text-sm mt-1">September 2023 - March 2024</h5>
        </article>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">Director for Engineering Committee</h3>
            <h4 class="italic">UP Center for Student Innovations (UP CSI)</h4>
            <h5 class="text-slate-500 text-sm mt-1">September 2023 - November 2023</h5>
        </article>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">Member Relations Head</h3>
            <h4 class="italic">UP CURSOR</h4>
            <h5 class="text-slate-500 text-sm mt-1">February 2023 - May 2023</h5>
        </article>
    </section>

    <section class="basis-1/2 ml-3 mb-0">
        <h2 class="text-xl">What projects have I made?</h2>
        <h4>
            See my public repositories, in full detail, at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
            <!-- Here are my highlights: -->
        </h4>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">Online Portfolio-Resume <i>(this webpage!)</i></h3>
            <h4 class="italic">Svelte + Tailwind</h4>
            <h5 class="text-slate-500 text-sm mt-1">I felt a glow like this</h5>
        </article>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">Poverty and Parenting: A Case Study</h3>
            <h4 class="italic">Python</h4>
            <h5 class="text-slate-500 text-sm mt-1">Never before</h5>
        </article>

        <!-- <article class="hover:bg-slate-200"> -->
        <article>
            <h3 class="text-lg">
                <!-- <a class="hover:underline" href=""> -->
                Finances Tracker
                <!-- </a> -->
            </h3>
            <h4 class="italic">Google Sheets + Apps Script</h4>
            <h5 class="text-slate-500 text-sm mt-1">And never since</h5>
        </article>
    </section>
</div>

<section>
    <h2 class="text-xl">What do I do in my free time?</h2>
    <h4>
        Outside of computer science, I also like to hit the gym, play competitive video games, and play basketball.
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
            jdtomanan@up.edu.ph
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