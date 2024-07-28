<script>
    import "../app.css";
    import "../global.css";

    const link = {
        li: "https://www.linkedin.com/in/jedtomanan/",
        gh: "https://github.com/HoweZae",
        fb: "",
        twt: ""
    }

    const header = [
        {img: "/linkedin.png", color: "", link: link.li},
        {img: "/github.png", color: "", link: link.gh},
        {img: "/fb.png", color: "", link: link.fb},
        {img: "/twt.png", color: "", link: link.twt},
    ]
</script>

<header class="bg-gradient-to-br from-white to-slate-200 to-90% p-5 rounded-xl shadow-lg">
    <h1 class="text-3xl my-2 font-bold italic underline">
        Hey ya! I'm Jose.
    </h1>
    <p class="text-l">
        I am a 3rd year BS Computer Science student from the University of the Philippines Diliman.
        Thanks for visiting this page, it's nice to meet you!
        <br>
        You can visit my socials below:
    </p>

    <!-- Placeholder -->
    <div class="flex mt-3">
        {#each header as image}
            <div class="basis-1/4 flex justify-center bg-slate-600 hover:bg-slate-500 mx-2 p-2 rounded-xl">
                <img class="h-12" src="/favicon.png" alt="Logo" />
            </div>
        {/each}
    </div>
</header>

<div class="flex my-5">
    <div class="basis-1/2 bg-white mr-3 p-5 rounded-xl shadow-lg">
        <h2 class="text-xl">What have I been up to?</h2>
        <h3>
            See these in full detail in <a class="underline text-slate-600" href={link.li}>LinkedIn</a>.
            Here are my highlights:
        </h3>
    </div>

    <div class="basis-1/2 bg-white ml-3 p-5 rounded-xl shadow-lg">
        <h2 class="text-xl">What projects have I made?</h2>
        <h3>
            See these in full detail in <a class="underline text-slate-600" href={link.gh}>GitHub</a>.
            Here are my highlights:
        </h3>
    </div>
</div>

<div class="bg-white my-5 p-5 rounded-xl shadow-lg">
    <h2 class="text-xl">What do I do in my free time?</h2>
    <h3 class="text-justify">
        Outside of computer science, I also like to hit the gym, play competitive video games, and play basketball.
        I also used to pursue traditional drawing and guitar/keyboard playing as hobbies.
    </h3>
</div>

<div class="bg-white my-5 p-5 rounded-xl shadow-lg">
    <h2 class="text-xl">Where can you find me?</h2>
    <h3></h3>
</div>

<div class="bg-white my-5 p-5 rounded-xl shadow-lg">
    <h3 class="text-white-900 text-justify">
        This page is written with Svelte and Tailwind.
        If you haven't noticed, I tried to fill out this web page with as much of my knowledge as possible.
        Feel free to use <b>Inspect Element</b> to see how I made this!
    </h3>
</div>