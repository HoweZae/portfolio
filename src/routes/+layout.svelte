<script>
    import "../app.css";
</script>

<div class="app bg-fixed">
    <nav class="
        flex items-center justify-center gap-8
        fixed w-full max-w-screen p-4 z-50
        bg-white backdrop-blur-sm opacity-90
        shadow-xl
        border-b-2 border-none"
    >
        <a class="justify-items-start font-bold italic" href="#top">JoseTomanan.io</a>
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
        @apply text-sky-500;
    }
</style>