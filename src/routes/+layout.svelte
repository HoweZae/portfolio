<script>
    import "../app.css";
</script>

<div class="app bg-fixed">
    <nav 
        class="p-4 bg-white border-b-2 border-none max-w-screen flex items-center justify-center gap-8 font-['Avenir'] fixed w-full bg-opacity-75 backdrop-blur-sm z-50"
    >
        <a href="#top">Top</a>
        <a href="#me">Me</a>
        <a href="#roles">Roles</a>
        <a href="#projects">Projects</a>
        <!-- <a href="#hobbies">Hobbies</a> -->
        <a href="#contact">Contact</a>
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

<style>
    nav > a {
        @apply transition ease-out;
    }

    nav > a:hover {
        @apply text-sky-400;
    }
</style>