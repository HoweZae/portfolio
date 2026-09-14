<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import { activeSection } from "$lib/utils";

  let openValue = $state<string | undefined>(undefined);
</script>

<span class="section-anchor" id="projects"></span>
<div class="section-card"
      data-section="projects"
      transition:fly={{ delay: 400, duration: 1000 }}
      class:section-card-active={$activeSection === 'projects'}>
  <section class="section-content">
    <h2 class="section-heading">My projects</h2>
    <Accordion.Root type="single" class="section-list" bind:value={openValue}>
      <Article title="I/O MONEY"
						id="proj-finances"
						href="https://josetomanan.github.io/money-sheet-monorepo"
						subtitle="Frontend interface for Google Sheets"
						date="FEB 2023 - PRESENT"
						other="
                Web app integrated with Apps Script API to write into personal finance spreadsheet.
                Uses Google Sheets as database.
                Mobile-responsive and offline-friendly.
                Ongoing project.
							"
						techInvolved={ ["simple-icons:GoogleAppsScript", "simple-icons:Svelte"] }
					/>
      <Article title="Svelte-based Pokédex"
						id="proj-svelte-pokedex"
						href="https://oaks-assistant.vercel.app"
						subtitle="Svelte-based Pokédex frontend interface"
						date="MAR 2026"
						other="
								Responsive Pokédex SPA in Svelte 5 + Tailwind v4; lazy-loads all 1025 Pokémon via PokéAPI.
                Sorting, filtering, skeleton animations, and lazy hydration for full cross-device responsiveness."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TypeScript", "simple-icons:TailwindCSS"] }
						{openValue}
					/>
      <Article title="SIPAT.MATH"
						id="proj-199"
						href="https://github.com/JoseTomanan/S3LAB-ai-grading"
						subtitle="LLM-powered Mathematics grading tool"
						date="SEP 2025 - MAY 2026"
						other="
								2-man capstone: VLM-based tool automating assessment of early-level Math using rubrics and answer keys.
                Python + Gemini API prototype; leading frontend in Svelte and Shadcn.
                CS199 final project."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:FastAPI", "simple-icons:SQLite"] }
						{openValue}
					/>
      <!--
      <Article title="JoseTomanan.io"
						id="proj-portfolio"
						href="https://github.com/JoseTomanan/portfolio"
						subtitle="Personal portfolio-resume"
						date="JUL 2024 - PRESENT"
						other="
								This webpage.
                Static SPA built with Svelte and Tailwind; designed for mobile-first responsiveness and accessibility.
                Features scroll-based section highlighting."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:PostCSS"] }
						{openValue}
					/>
      -->
      <Article title="Potterdex"
						id="proj-potterdex"
						href="https://potterdex.vercel.app"
						subtitle="React-based Harry Potter database UI"
						date="DEC 2024 - JAN 2025"
						other="
								React + Tailwind frontend for the unofficial PotterDB API; Axios for fetching, React Router for slug-based routing.
								Shadcn components, custom CSS animations, and JS for interactivity beyond library defaults."
						techInvolved={ ["simple-icons:React", "simple-icons:Axios", "simple-icons:TailwindCSS"] }
						{openValue}
					/>
      <Article title="Shogimon"
						id="proj-150"
						href="https://github.com/JoseTomanan/shogi-pygame"
						subtitle="Python-based multiplayer video game"
						date="DEC 2024 - JAN 2025"
						other="
								Python + Pygame game built on MVC and SOLID principles; allows for online multiplayer and local pass-and-play. CS 150 final project."
						techInvolved={ ["simple-icons:Python", "simple-icons:Go"] }
						{openValue}
					/>
      <Article title="Poverty & Parenting: A Data Science Study"
						id="proj-132"
						href="https://tes-birth-rate.vercel.app"
						subtitle="Economic analysis of birth rates in the Philippines"
						date="FEB 2024 - JUN 2024"
						other="
								Data study (Pandas, Seaborn, GeoPandas) correlating live births with poverty incidence across Philippine municipalities. CS 132 final project."
						techInvolved={ ["simple-icons:Python"] }
						{openValue}
					/>
    </Accordion.Root>
    
    <h6 class="section-footnote">
      See my repositories at 
      <a class="section-footnote-link" href={link.gh} target="_blank" rel="noopener noreferrer">GitHub</a>.
    </h6>
  </section>
</div>
