<script>
    import "../app.css";
    import "../global.css";
</script>

<nav 
    class="p-4 bg-white border-b-2 border-sky-500 max-w-screen flex items-center justify-center gap-8 font-['Avenir'] fixed w-full bg-opacity-80"
>
    <a class="nav" href="_blank">Top</a>
    <a class="nav" href="_blank">Roles</a>
    <a class="nav" href="_blank">Projects</a>
    <a class="nav" href="_blank">Me</a>
    <a class="nav" href="_blank">Contact</a>
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