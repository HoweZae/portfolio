<script lang='ts'>
  import Article from "$lib/components/Article.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index";
  import { fly } from "svelte/transition";
  import { activeSection } from "$lib/utils";

  const defaultLink = "https://www.linkedin.com/in/jedtomanan/details/experience/"
  let openValue = $state<string | undefined>(undefined);
</script>

<span class="section-anchor" id="roles"></span>
<div class="section-card"
      data-section="roles"
      transition:fly={{ delay: 200, duration: 1000 }}
      class:section-card-active={$activeSection === 'roles'}>
  <section class="section-content">
    <h2 class="section-heading">My roles</h2>
    <Accordion.Root type="single" class="section-list" bind:value={openValue}>
      <Article
						id="role-metr"
						title="Software Engineer"
						subtitle="Metro East Technology Resources, Inc."
						href={defaultLink}
						date="AUG 2026 - PRESENT"
						other="
							Using GoLang to build and maintain a microservices-based backend.
							Focuses on concurrency and resolving race conditions; maintains Docker containers and CI pipelines."
						techInvolved={ ["simple-icons:Go", "simple-icons:Docker", "simple-icons:Bash"] }
						{openValue}
					/>
      <Article
						id="role-195"
						title="Backend Developer Intern"
						subtitle="Pointwest Innovations Corporation"
						href={defaultLink}
						date="JUN 2025 - JUL 2025"
						other="
								200-hour internship on a 10-member team building an HR application; contributed Spring Boot API services and maintained automated test suites."
						techInvolved={ ["simple-icons:Spring", "simple-icons:Git", "simple-icons:Jira"] }
						{openValue}
					/>
      <Article
						id="role-cursor1"
						title="Event Co-Head"
						subtitle="UP Association of Computer Science Majors (UP CURSOR)"
						href={defaultLink}
						date="SEP 2023 - MAR 2024"
						other="
								Co-led 20 people organizing Tackle 2024, a 4-day hybrid tech career fair.
								Headed Branding and HR sub-teams; used Notion for cross-team coordination."
						techInvolved={ ["simple-icons:Notion", "simple-icons:Asana", "simple-icons:GoogleSheets", "simple-icons:Canva"] }
						{openValue}
					/>
      <Article
						id="role-csi"
						title="Web Development Module Writer"
						subtitle="UP Center for Student Innovations (UP CSI)"
						href={defaultLink}
						date="SEP 2023 - NOV 2023"
						other="
								Authored web dev learning modules for 50+ applicants using Typst; collaborated via Git."
						techInvolved={ ["simple-icons:Typst", "simple-icons:Git"] }
						{openValue}
					/>
      <Article
						id="role-cursor2"
						title="Member Relations Head"
						subtitle="UP CURSOR"
						href={defaultLink}
						date="FEB 2023 - MAY 2023"
						other="
								Led a team of 6 managing engagement for 100+ members; produced CURSOR Cares and Humans of CURSOR publications."
						techInvolved={ ["simple-icons:Notion"] }
						{openValue}
					/>
    </Accordion.Root>
    
    <h6 class="section-footnote">
      See more of what I've done at
      <a class="section-footnote-link" href={defaultLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </h6>
  </section>
</div>
