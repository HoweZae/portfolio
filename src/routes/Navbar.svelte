<script lang="ts">
  import { link } from "$lib";
  import { activeSection } from "$lib/utils";
</script>


<div class="fixed top-4 left-1/2 z-50
          navbar-condense
          flex flex-row items-center gap-x-0.5
          [&>nav]:w-fit
          [&>nav]:bg-card/50 [&>nav]:text-foreground [&>nav]:backdrop-blur-sm
          [&>nav]:ring [&>nav]:ring-border
          [&>nav]:shadow [&>nav]:shadow-border/50
          [&>nav]:px-8 [&>nav]:first:pr-6 [&>nav]:last:pl-6
          [&>nav]:first:rounded-l-full [&>nav]:last:rounded-r-full
          [&>nav]:flex [&>nav]:flex-row [&>nav]:items-center [&>nav]:align-middle
          [&>nav>*]:py-1.5
        ">
  <nav aria-label="Main navigation"
        class="navbar-condense-padding py-1
              justify-center gap-10
              *:hover:text-foreground *:hover:text-shadow-glow
              *:focus-visible:text-foreground *:focus-visible:text-shadow-glow *:focus-visible:underline
            ">
    <a href="#me" class:text-foreground={$activeSection === 'me'} class:text-shadow-glow={$activeSection === 'me'}>Me</a>
    <a href="#projects" class:text-foreground={$activeSection === 'projects'} class:text-shadow-glow={$activeSection === 'projects'}>Projects</a>
    <a href="#roles" class:text-foreground={$activeSection === 'roles'} class:text-shadow-glow={$activeSection === 'roles'}>Roles</a>
    <!-- <a href="#contact">Contact</a> -->
  </nav>

  <nav aria-label="Resume navigation"
        class="navbar-condense-padding py-1
                justify-center
                *:hover:text-primary
                *:focus-visible:text-primary *:focus-visible:underline
              ">
    <a id="clickable-resume"
        href={link.resume}
        target="_blank"
        rel="noopener noreferrer">
      <span>Resume</span>
    </a>
  </nav>
</div>

<style lang="postcss">
  @reference "../app.css";

  nav > a {
    @apply text-base sm:text-lg;
  }

  @keyframes navbar-condense {
    from { transform: translate(-50%, 0); }
    to { transform: translate(-50%, -12px); }
  }

  @keyframes navbar-condense-padding {
    from { padding-block: 4px; }
    to { padding-block: 0; }
  }

  @supports (animation-timeline: scroll()) {
    .navbar-condense {
      animation: navbar-condense linear both;
      animation-timeline: scroll(root block);
      animation-range: 0 240px;
    }

    .navbar-condense-padding {
      animation: navbar-condense-padding linear both;
      animation-timeline: scroll(root block);
      animation-range: 0 80px;
    }
  }
</style>
