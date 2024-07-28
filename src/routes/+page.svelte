<script>
    import "../app.css";
    import "../global.css";

    const link = {
        li: "https://www.linkedin.com/in/jedtomanan/",
        gh: "https://github.com/HoweZae",
        fb: "",
        ig: "",
        twt: "",
    }

    const header = [
        {logo: "/logo/li.png", hovercolor: "cyan-200", link: link.li},
        {logo: "/logo/gh.svg", hovercolor: "purple-200", link: link.gh},
        {logo: "/logo/fb.png", hovercolor: "blue-200", link: link.fb},
        {logo: "/logo/ig.webp", hovercolor: "orange-200", link: link.ig},
        {logo: "/logo/twt.png", hovercolor: "sky-200", link: link.twt},
    ]
</script>

<header class="bg-white p-5 rounded-xl shadow-lg">
    <h1 class="my-2 font-bold italic">
        Hey, ya! I'm Jose Tomanan.
    </h1>
    <h4>
        I am a 3rd year BS Computer Science student from the University of the Philippines Diliman.
        Nice to meet you, thanks for visiting this page!
        <br>
        You can visit my socials below:
    </h4>

    <!-- Placeholder -->
    <div class="flex mt-3">
    {#each header as image}
        <a href={image.link}
            class="basis-1/4 flex justify-center
                bg-gradient-to-r from-slate-100 to-slate-100
                hover:from-slate-50 hover:to-{image.hovercolor} to-80%
                mx-2 p-2 rounded-xl"
        ><img class="h-8" src={image.logo} alt="Logo" /></a>
    {/each}
    </div>
</header>

<div class="flex">
    <section class="basis-1/2 mr-3 mb-0">
        <h2>What have I been up to?</h2>
        <h4>
            See everything I've done in full detail at <a class="italic text-slate-600 hover:underline" href={link.li}>LinkedIn</a>.
            <!-- Here are my highlights: -->
        </h4>

        <article>
            <h3>Tackle Junior Head</h3>
            <h4 class="italic">UP Association of Computer Science Majors (UP CURSOR)</h4>
        </article>

        <article>
            <h3>Head Giver</h3>
            <h4 class="italic">UP Center for Student Innovations (UP CSI)</h4>
        </article>

        <article>
            <h3>Member Relations Head</h3>
            <h4 class="italic">UP CURSOR</h4>
        </article>
    </section>

    <section class="basis-1/2 ml-3 mb-0">
        <h2>What projects have I made?</h2>
        <h4>
            See everything I've made in full detail at <a class="italic text-slate-600 hover:underline" href={link.gh}>GitHub</a>.
            <!-- Here are my highlights: -->
        </h4>

        <article>
            <h3>Online Portfolio-Resume <span class="font-thin italic">(this exact website!)</span></h3>
            <h4 class="italic">Svelte + Tailwind</h4>
        </article>

        <article>
            <h3>Finances Tracker</h3>
            <h4 class="italic">Google Sheets + Apps Script</h4>
        </article>

        <article>
            <h3>Checkmate</h3>
            <h4 class="italic">Figma</h4>
        </article>
    </section>
</div>

<section>
    <h2>What do I do in my free time?</h2>
    <h4>
        Outside of computer science, I also like to hit the gym, play competitive video games, and play basketball.
        I also used to pursue traditional drawing and guitar/keyboard playing as hobbies.
    </h4>
</section>

<section>
    <h2>Where can you find me?</h2>
    <!-- <h4></h4> -->
</section>

<section>
    <h4 class="text-white-900 text-justify">
        This page is written with Svelte and Tailwind.
        If you haven't noticed, I tried to fill out this web page with as much of my knowledge as possible.
        Feel free to use <b>Inspect Element</b> to see how I made this!
    </h4>
</section>