<script>
    import "../app.css";
</script>

<nav 
    class="p-4 bg-white border-b-2 border-sky-500 max-w-screen flex items-center justify-center gap-8 font-['Avenir'] fixed w-full bg-opacity-80 z-50"
>
    <a class="nav" href="#top">Top</a>
    <a class="nav" href="#me">Me</a>
    <a class="nav" href="#roles">Roles</a>
    <a class="nav" href="#projects">Projects</a>
    <a class="nav" href="#hobbies">Hobbies</a>
    <a class="nav" href="#contact">Contact</a>
</nav>

<premain class="flex justify-center">
    <main class="mx-6 min-h-screen max-w-[960px] flex flex-col">
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