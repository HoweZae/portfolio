<script>
    import { fly } from "svelte/transition";
</script>

<page class="h-auto gap-0.5" transition:fly={{ delay: 100, duration: 1000 }}>
    <jumpable id="me" />
    <section class="flex flex-col gap-1.5 mt-3.5 rounded-b-none">
        <h2>What do I do?</h2>
        <p>
            As a CS major, my course has given me the privilege to explore the different options available in the tech industry.
            This institution has given me the chance to learn about <i>data science</i>, <i>software development</i>, and <i>database systems</i>.
            While nothing in particular stood out to me personally, I was enjoying the act of learning a new skill by creating something from what I have learned.
        </p>
        <!-- TODO: something to visualize -->

        <p class="italic font-bold">It was almost like the journey is part of the destination.</p>
        <!-- TODO: something to visualize -->

        <p>
            Right now, I am currently immersing myself in the field of <i>UI/UX design</i>;
            I appreciate diving into the psychology behind what drives users into clicking buttons.
            I long to be able to make a career out of this path that I enjoy.
        </p>
        <!-- TODO: something to visualize -->
    </section>

    <section class="flex flex-col gap-1.5 rounded-t-none">
        <p>
            When not working, however, I prefer to spend my time away from the keyboard than in front of it.
            I like to stay active and explore different things, but my favorite ways to spend my free time are with
            <a href="https://www.instagram.com/stories/highlights/17992555250680811/" class="hoverable-link" target="_blank">weightlifting</a> and
            <a href="_blank" class="hoverable-link" target="_blank">basketball</a>.
        </p>

        <p>
            I am also an 
            <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="hoverable-link" target="_blank">avid Swiftie</a>: 
            I'd bet my left leg I know more about Taylor Swift than you!
        </p>
    </section>
</page>