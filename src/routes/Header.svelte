<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import { fade } from "svelte/transition";

    const header = [
        {
            logo: "/logo/li.png", 
            color: "hover:from-cyan-100 hover:to-cyan-300", 
            link: "https://www.linkedin.com/in/jedtomanan/", 
            handle: "jedtomanan"
        },
        {
            logo: "/logo/gh.svg", 
            color: "hover:from-purple-100 hover:to-purple-300", 
            link: "https://github.com/HoweZae", 
            handle: "HoweZae"
        },
        {
            logo: "/logo/fb.png", 
            color: "hover:from-blue-100 hover:to-blue-300", 
            link: "https://www.facebook.com/jedtomanan/", 
            handle: "jedtomanan"
        },
        {
            logo: "/logo/ig.png", 
            color: "hover:from-red-50 hover:to-red-200", 
            link: "https://www.instagram.com/jose.tmnn/", 
            handle: "jose.tmnn"
        },
        {
            logo: "/logo/twt.png", 
            color: "hover:from-sky-50 hover:to-sky-200", 
            link: "https://x.com/howe_zae", 
            handle: "howe_zae"
        },
    ]
</script>

<page class="mt-16 h-auto gap-0.5 fade-in" transition:fade>
    <jumpable id="top" />
    <section class="flex flex-col gap-4 items-center justify-between overflow-hidden rounded-t-lg rounded-b-none p-0 pb-4 mt-4">
        <Carousel />

        <div class="flex flex-col gap-0.5 items-center justify-center">
            <h1 class="text-2xl">Jose Tomanan</h1>
            <h3 class="text-slate-500">CS major / Web developer / Student leader / Fashionista / Gym rat</h3>
        </div>
    </section>

    <section class="shrink flex flex-col gap-2 rounded-t-none rounded-b-lg items-baseline">
        <h4>
            Hey! I am Jose, a BS Computer Science junior at the University of the Philippines - Diliman.
            <a
                id="see-resume" class="hoverable-link" href="./resume-20240824.pdf" target="_blank"
            >
                See my resume!
                <svg 
                    id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>
        </h4>

        <div class="flex gap-1 w-full px-2">
            {#each header as image}
                <button type="button" class="grow flex justify-center bg-gradient-to-b from-white to-white {image.color} active:from-slate-100 active:to-slate-100 p-2 rounded-xl transition ease-out hover:scale-110">
                    <a href={ image.link } target="_blank">
                        <img class="h-8" src={image.logo} alt="Logo" />
                    </a>
                </button>
            {/each}
        </div>
    </section>
</page>

<style>
    #see-resume {
        @apply inline-flex gap-0.5 text-slate-500;
    }
    #see-resume:hover {
        @apply gap-2 text-sky-500;
    }
    #link {
        opacity: 0;
    }
    #see-resume:hover #link {
        opacity: 1;
    }
</style>