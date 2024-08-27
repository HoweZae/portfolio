<script>
    import "../app.css";
</script>

<div class="app bg-fixed scroll-smooth">
    <nav 
        class="p-4 bg-white border-b-2 border-sky-500 max-w-screen flex items-center justify-center gap-8 font-['Avenir'] fixed w-full bg-opacity-80 z-50"
    >
        <a class="nav" href="#top">Top</a>
        <a class="nav" href="#me">Me</a>
        <a class="nav" href="#roles">Roles</a>
        <a class="nav" href="#projects">Projects</a>
        <!-- <a class="nav" href="#hobbies">Hobbies</a> -->
        <a class="nav" href="#contact">Contact</a>
    </nav>

    <premain class="flex justify-center">
        <main class="mx-2 min-h-screen max-w-[960px] flex flex-col gap-4">
            <slot />
        </main>
    </premain>

    <footer class="py-2">
        <h6 class="text-center text-slate-400">
            //
            This page is written with Svelte and Tailwind.
            Feel free to open the codebase to see how I made this!
        </h6>
    </footer>
</div>