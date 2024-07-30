<script>
    export let href;
    export let hoverColor;
    export let title;
    export let subtitle;
    export let other;
</script>

<article>
    <h3 class="text-lg"><a
        class="hover:underline {hoverColor}"
        {href}
    >
        <!-- on:click|once={linkClicked} -->
        {title}
    </a></h3>
    <h4 class="italic">{subtitle}</h4>
    <h5 class="text-slate-500 text-sm mt-1">{other}</h5>
</article>