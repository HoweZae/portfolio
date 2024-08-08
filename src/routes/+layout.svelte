<script>
    import "../app.css";
    import "../global.css";
    import * as helpers from "$lib";

    const header = helpers.header;
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

<main>
    <slot></slot>
</main>

<footer>
    <h4 class="text-white-900 text-justify">
        This page is written with Svelte and Tailwind.
        Feel free to use <b>Inspect Element</b> to see how I made this!
    </h4>
</footer>