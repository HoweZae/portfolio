<script lang="ts">
  import FaBrandsLinkedin from '~icons/fa-brands/linkedin';
  import FaBrandsGithub from '~icons/fa-brands/github';
  import FaBrandsFacebook from '~icons/fa-brands/facebook';
  import FaBrandsInstagram from '~icons/fa-brands/instagram';

  import IconArrow from '~icons/ic/baseline-arrow-forward';
  import IconEmail from '~icons/ic/baseline-email';
  import IconPhone from '~icons/ic/baseline-phone';
  
  import CarouselContent from "./CarouselContent.svelte";
  import Roles from "./Roles.svelte";
  import Projects from "./Projects.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import { onMount } from "svelte";
  import { activeSection } from "$lib/utils";

  function updateActiveSection() {
    const threshold = window.innerHeight * 0.40;
    let current: string | null = null;
    for (const el of document.querySelectorAll<HTMLElement>("div.page[data-section]")) {
      if (el.getBoundingClientRect().top <= threshold)
        current = el.dataset.section!;
    }
    activeSection.set(current);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      updateActiveSection();
    });
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>



<main class="max-w-[960px] flex flex-col
              gap-y-6 px-2 w-full mx-auto">
  <span class="jumpable" id="top"></span>
  <div class="page h-[92svh] border-0 gap-0 overflow-visible"
          data-section="top"
          transition:fly={{ delay: 100, duration: 1000 }}>
    <section class="hero-parallax
                    section-body
                    bg-transparent pt-16
                    flex flex-col-reverse sm:flex-row
                    justify-center items-center gap-y-8
                  ">
      <div class="flex flex-col items-center gap-y-8
                  sm:flex-1 sm:items-start sm:gap-y-12
                  *:text-center *:sm:text-left">
        <div class="space-y-4 md:space-y-8">
          <h1 class="font-bold magic-text">Jose Tomanan</h1>
          <h2 class="flex flex-col font-heading font-medium text-muted-foreground
                      tracking-tight leading-6 md:leading-none">
            <span class="text-foreground font-semibold">
              Full-stack web developer
            </span>
            proficient in AI &amp; writing scalable code
          </h2>
        </div>
        <a href={link.li} target="_blank" rel="noopener noreferrer"
            class="group inline-flex items-center
                  bg-transparent text-primary
                  font-heading text-2xl font-semibold
                  gap-x-4 py-4 px-6 -ml-1.5
                  rounded-3xl
                  ring-2 ring-primary
                  hover:text-background hover:bg-primary
                ">
          <h3 class="text-inherit">Connect with me</h3>
          <IconArrow class="size-6 group-hover:-rotate-45
                            transition-transform duration-200"/>
        </a>
      </div>

      <CarouselContent/>
    </section>
  </div>

  <span class="jumpable" id="me"></span>
  <div class="page gap-0 z-5"
        data-section="me"
        transition:fly={{ delay: 0, duration: 1000 }}
        class:section-active={$activeSection === 'me'}>
    <section class="section-body gap-4 rounded-b-none border-b border-border">
      <h2>About me</h2>
      <h4>
        I am Jose, a BSCS cum laude graduate from UPD and an
        <span class="text-primary">
          AI-proficient full-stack web developer
        </span>,
        currently working as a backend developer at METR.
        I use AI to develop my passion projects, one of which is a
        <a href={link.gh_hooper_game} class="hoverable-link font-medium" target="_blank" rel="noopener noreferrer">
          duel-style basketball game
        </a> in Godot. Prototype coming soon!
      </h4>
    </section>
    <section class="section-body gap-2 rounded-t-none">
      <h4>
        Off the clock, I play Valorant &amp; CS2, and do physical activity: bouldering, lifting, running.
        Reach out to me <a class="hoverable font-normal" href={link.ig} target="_blank" rel="noopener noreferrer">here</a> if you want to connect!
      </h4>
    </section>
  </div>
  
  <Projects />
  <Roles />

</main>

<footer class="w-full mt-16 bg-muted/75 border-t border-border">
  <div class="w-full max-w-[960px] mx-auto px-6 py-10
              flex flex-col gap-8
              sm:flex-row sm:items-start sm:justify-between
            ">
    <div class="flex flex-col gap-y-1 leading-tight
                *:text-muted-foreground/75">
      <h4 class="font-bold">Jose Tomanan</h4>
      <a href="mailto:tomananjose.work@gmail.com"
          class="hover:text-primary inline-flex gap-x-2 items-center w-fit">
        <IconEmail class="size-4 shrink-0"/> tomananjose.work@gmail.com
      </a>
      <a href="tel:+639473013664"
          class="hover:text-primary inline-flex gap-x-2 items-center w-fit">
        <IconPhone class="size-4 shrink-0"/> +63 947 301 3664
      </a>
    </div>

    <div class="flex flex-col gap-y-4 sm:items-end">
      <div class="inline-flex items-center gap-x-3
                  *:rounded-lg *:p-1.5 *:text-muted-foreground
                  *:hover:text-foreground *:hover:bg-card
                  [&>a>*]:size-4">
        <a href={link.li} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaBrandsLinkedin/>
        </a>
        <a href={link.gh} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaBrandsGithub/>
        </a>
        <a href={link.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaBrandsFacebook/>
        </a>
        <a href={link.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaBrandsInstagram/>
        </a>
      </div>
      <a href="#top" class="text-muted-foreground/75 hover:text-primary">
        Back to top
      </a>
    </div>
  </div>

  <div class="w-full border-t border-border/60">
    <div class="w-full max-w-[960px] mx-auto px-6 py-4">
      <span class="text-sm text-muted-foreground/50">
        &copy; {new Date().getFullYear()} Jose Tomanan
      </span>
    </div>
  </div>
</footer>
