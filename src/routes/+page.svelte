<script>
    import Header from "./Header.svelte";
    import Me from "./Me.svelte";
    import Roles from "./Roles.svelte";
    import Projects from "./Projects.svelte";

    import ClickToCopy from "$lib/components/ClickToCopy.svelte"

    import { onMount } from "svelte";
    // import { fade } from "svelte/transition";
    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    let name = "";
    let email = "";
    let message = "";
    let startPage = false;

    /**
     * @param {string} name
     * @param {string} email
     * @param {string} message
     */
     function submitForm(name, email, message) {
        alert(`Submitted ${name}, ${email} with message: ${message}`);
    }

    onMount(() => {
        startPage = true;
    });
</script>

<svelte:head>
    <title>Jose Tomanan</title>
    <meta name="description" content="Jose's portfolio" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>

{#if startPage}
    <Header />
{/if}

<Me />

<Roles />

<Projects />

<page class="h-auto flex-row">
    <jumpable id="contact" class="-mx-2" />
    <section class="basis-2/5">
        <h2>Contact me:</h2>

        <div class="flex flex-col">
            <ClickToCopy content="jdtomanan@up.edu.ph"
                on:click={ ()=>{ navigator.clipboard.writeText("jdtomanan@up.edu.ph") }} />

            <ClickToCopy content="+63 947 301 3664"
                on:click={ () => { navigator.clipboard.writeText("+639473013664") }} />

            <ClickToCopy content="In: jedtomanan"
                on:click={ () => { navigator.clipboard.writeText("jedtomanan") }} />

            <ClickToCopy content="fb: Jose Ernesto Tomanan"
                on:click={ () => { navigator.clipboard.writeText("Jose Ernesto Tomanan") }} />
        </div>

        <!-- <h6 class="text-slate-400 italic text-right">(hover for copy button!)</h6> -->
    </section>

    <section class="basis-3/5 gap-y-2">
        <h2>Or send me a message:</h2>

        <div class="flex gap-2 py-1">
            <form class="basis-5/12 flex gap-2 justify-between">
                <label for="name">Name: </label>
                <input 
                    name="name" type="text" class="input-sm caret-sky-500" placeholder="Your Name" 
                    bind:value={ name }
                >
            </form>

            <form class="basis-7/12 flex gap-2 justify-between">
                <label for="email">Email: </label>
                <input 
                    name="email" type="email" class="input-sm caret-sky-500" placeholder="yourname@email.com" 
                    bind:value={ email }
                >
            </form>
        </div>

        <form class="flex-col pb-2">
            <label for="message">Message:</label>
            <br>
            <textarea 
                class="block w-full font-['Avenir'] rounded-sm border-0 text-slate-700 ring-1 ring-inset ring-slate-300 p-1 caret-sky-500"
                rows=2 name="message" placeholder="Say something..."
                bind:value={ message }
            />
        </form>

        <form class="flex justify-end">
            <button
                class="border border-sky-500 bg-sky-500 hover:bg-white hover:text-sky-500 hover:underline underline-offset-2 rounded-md py-1 px-2.5 font-['Futura'] text-white transition ease-out"
                on:click={ ()=>{ submitForm(name, email, message) }}
                title="Work in progress"
            >
                Submit
            </button>
        </form>
    </section>
</page>

<style>
    .input-sm {
        @apply block w-full font-sans rounded-sm border-0 text-slate-700 ring-1 ring-inset ring-slate-300 px-1;
        /* @apply focus:ring-2 focus:ring-indigo-600; */
    }
    .input-sm::placeholder {
        @apply text-gray-400;   
    }
</style>