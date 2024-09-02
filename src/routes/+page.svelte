<script>
    import Top from "./Top.svelte";
    import Me from "./Me.svelte";
    import Roles from "./Roles.svelte";
    import Projects from "./Projects.svelte";
    import Contact from "./Contact.svelte";

    import { onMount } from "svelte";
    // import { fade } from "svelte/transition";
    // import { tweened, spring } from "svelte/motion";
    // import { elasticOut } from "svelte/easing";

    let startPage = false;

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

<Top />

{#if startPage}
    <Me />
    
    <Roles />
    
    <Projects />
    
    <Contact />
{/if}

<style>
</style>