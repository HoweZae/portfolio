<script>
    import ClickToCopy from "$lib/components/ClickToCopy.svelte";
    import { fly } from "svelte/transition";

    let name = "";
    let email = "";
    let message = "";

    /**
     * @param {string} name
     * @param {string} email
     * @param {string} message
     */
     function submitForm(name, email, message) {
        alert(`Submitted ${name}, ${email} with message: ${message}`);
    }
</script>

<page class="h-auto flex-row" transition:fly={{ delay: 100, duration: 1000 }}>
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