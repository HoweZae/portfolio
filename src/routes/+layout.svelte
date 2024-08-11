<script>
    import "../app.css";
    import "../global.css";
    import { header, buttonHover, linkClicked } from "$lib";
</script>

<header class="flex">
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
        <div class="flex">
            {#each header as image}
            <a 
                href={ image.link }
                class="basis-1/5 flex justify-center bg-gradient-to-r from-white to-white to-75% {image.color} p-2 rounded-xl"
                target="_blank"
                on:focus={ buttonHover }
            >
                <img class="h-8" src={image.logo} alt="Logo" />
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
        Feel free to open the codebase to see how I made this!
    </h6>
</footer>