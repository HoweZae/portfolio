<script>
    import "../app.css";
    import "../global.css";
    import { header, buttonHover, linkClicked } from "$lib";
</script>

<header class="flex mt-3">
    <img 
        class="mr-4 flex justify-center content-center h-52 border-double border-4 border-sky-700"
        src="/images/me.JPG"
        alt="Me"
    />
    <section class="grow my-0">
        <h1 class="text-3xl ml-2 mt-2 font-bold italic">
            Heya! I'm Jose Tomanan.
        </h1>
        <h4 class="text-lg ml-2">
            I am a 3rd year BS Computer Science student from University of the Philippines Diliman.
            <br> Thanks for visiting! Get to know me more:
        </h4>
        <div class="flex mt-3">
        {#each header as image}
            <a href={ image.link }
                class="basis-1/4 flex justify-center
                    bg-gradient-to-r from-slate-100 to-slate-100 to-75%
                    hover:from-slate-100
                    {image.color}
                    mx-1 p-2 rounded-xl"
                target="_blank"
                on:focus={ buttonHover }
            ><img class="h-7" src={image.logo} alt="Logo" />
            </a>
        {/each}
        </div>
    </section>
</header>

<main>
    <slot></slot>
</main>

<footer>
    <h6 class="text-center text-slate-400">
        //
        This page is written with Svelte, SvelteKit and Tailwind.
        Feel free to use Inspect Element to see how I made this!
    </h6>
</footer>