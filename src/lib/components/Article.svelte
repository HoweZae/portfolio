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
    article:hover span {
        @apply bg-sky-300;
    }

    article:hover date {
        @apply text-slate-500;
    }
</style>

<article class="flex flex-col h-[12rem] bg-slate-50 hover:bg-slate-100 py-2 px-3 rounded-lg text-left border border-slate-100 transition ease-linear">

    <!-- <div class="basis-1/2"></div> -->

    <div class="flex gap-4 items-baseline">
        <date class="grow text-right text-sm font-mono tracking-tighter text-slate-400">{date}</date>
        <div class="basis-3/4 flex flex-col text-baseline gap-0.5">
            <div class="flex items-center gap-4">
                <h3> 
                    <a class="text-lg clickableLink hover:text-sky-600 hover:underline transition ease-out text-slate-700" target="_blank" {id} {href} on:click|once>
                        {title}
                    </a> 
                </h3>

                <techs class="flex gap-1">
                    {#each techInvolved as tech}
                        <span class="bg-slate-300 rounded-lg px-2 text-slate-50 transition ease-out">
                            {tech}
                        </span>
                    {/each}
                </techs>
            </div>
            
            <h5><i>{subtitle}</i></h5>
            <h5 class="text-slate-500 text-sm">{other}</h5>
        </div>
    </div>
</article>