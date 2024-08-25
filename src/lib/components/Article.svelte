<script>
    export let id;
    export let href;
    export let color;
    export let title;
    export let subtitle;
    export let other = "";

    $: hoverColor = "hover:text-".concat(color);
    $: bgColor = "bg-".concat(color);

    export let date = "AUG 2023 - AUG 2023";
    export let techInvolved = [""];
</script>

<style>
    article:hover h3 {
        text-decoration-line: underline;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }

    #link {
        --tw-text-opacity: 0;
        stroke-width: 0;
    }

    article:hover #link {
        --tw-text-opacity: 1;
        stroke-width: 2;
    }

    article:hover perTech {
        @apply bg-sky-300;
    }

    article:hover date {
        @apply text-slate-600;
    }
</style>

<article class="flex flex-col h-48 bg-slate-50 hover:bg-slate-100 py-2 px-3 rounded-lg text-left border border-slate-100 transition ease-linear z-10">
    <div class="flex gap-4 items-baseline">
        <date class="grow text-right text-sm font-mono tracking-tighter text-slate-400 transition ease-out">
            {date}
        </date>

        <div class="basis-4/5 flex flex-col">
            <h3 class="text-lg underline-offset-2 flex font-sans font-semibold"> 
                <a class="flex items-baseline clickableLink text-slate-700 hover:text-sky-500 gap-2.5 hover:gap-4 transition-all ease-out" target="_blank" {id} {href} on:click|once>
                    {title}
                    <svg 
                        id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" 
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a> 
            </h3>
            
            <h5><i>{subtitle}</i></h5>
            
            <p class="text-slate-500 text-sm grow">{other}</p>

            <techs class="flex gap-1 mt-1.5">
                <!-- TODO: justify between, make sure this is at the bottom. mt-1.5 is not it -->
                {#each techInvolved as tech}
                    <perTech class="bg-slate-300 hover:bg-sky-600 rounded-xl px-2 text-white transition ease-out">
                        {tech}
                    </perTech>
                {/each}
            </techs>
        </div>
    </div>
</article>