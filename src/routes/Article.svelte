<script>
    export let href = "";
    export let hoverColor = "";
    export let title = "";
    export let subtitle = "";
    export let other = "";
</script>

<article class="bg-slate-100 mt-2 py-2 px-3 rounded-lg shadow-sm text-center">
    <h3 class="text-lg clickableLink">
        <a class="hover:underline {hoverColor}"
            {href}
            target="_blank"
            on:click|once
        >
            {title}
        </a>
    </h3>
    <h4 class="italic">{subtitle}</h4>
    <h5 class="text-slate-500 text-sm mt-1">{other}</h5>
</article>