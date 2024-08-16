<script>
    import "../app.css";
    import "../global.css";
</script>

<nav class="h-16 flex flex-col justify-center bg-white border-b-2 border-sky-500" >
    <navbar class="max-w-screen flex justify-center gap-8 font-['Avenir']" >
        <!-- svelte-ignore a11y-missing-attribute -->
        <a>Top</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a>Projects</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a>Roles</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a>Contact</a>
    </navbar>
</nav>

<premain class="flex justify-center">
    <main class="mx-6 min-h-screen max-w-screen-lg flex flex-col">
        <slot></slot>
    </main>
</premain>

<footer>
    <h6 class="text-center text-slate-400">
        //
        This page is written with Svelte, SvelteKit and Tailwind.
        Feel free to open the codebase to see how I made this!
    </h6>
</footer>