<script lang="ts">
  import { iconMap } from "$lib/iconMap";
  import { cn } from "$lib/utils";
  import IcBaselineArrowOutward from '~icons/ic/baseline-arrow-forward';
  import * as Accordion from "$lib/components/ui/accordion/index";
  import * as Tooltip from "$lib/components/ui/tooltip/index";

  let {
    id,
    href,
    title,
    subtitle,
    other = "",
    date = "AUG 2024 - AUG 2024",
    techInvolved = [],
    openValue = undefined,
  }: {
    id: string;
    href: string;
    title: string;
    subtitle: string;
    other?: string;
    date?: string;
    techInvolved?: string[];
    openValue?: string;
  } = $props();

  const isOpen: boolean = $derived(openValue === id);
</script>



<article class={cn("group/whole first:rounded-t-lg last:rounded-b-lg",
                "text-left bg-card z-10",
                isOpen
                  ? 'ring-2 ring-muted-foreground/35'
                  : 'hover:ring hover:ring-border'
                )}
          data-open={isOpen}>
  <Accordion.Item value={id} class="border-none">
    <Accordion.Trigger class="w-full px-4 hover:no-underline flex-wrap">
      <div class="flex flex-row w-full justify-between gap-0.5
            md:w-auto md:basis-1/3 lg:basis-[24%] md:flex-col">
        <span class="text-left md:text-right text-base font-mono font-normal 
              tracking-tight w-full
              text-muted-foreground/60">
          {date}
        </span>

        <div class="flex flex-row justify-end gap-2">
        {#each techInvolved as tech}
          {@const actualTag = tech.toLowerCase()}
          {@const techName = tech.split(":")[1]}
          {@const TechIcon = iconMap[actualTag]}
          <Tooltip.Root>
            <Tooltip.Trigger class="items-center" aria-label={techName}>
              <TechIcon class="h-4 w-4
                      cursor-default
                      text-muted-foreground/60
                      group-data-[open=true]/whole:text-muted-foreground/100
                    "/>
            </Tooltip.Trigger>
            <Tooltip.Content class="bg-popover text-popover-foreground border-none">
              {techName}
            </Tooltip.Content>
          </Tooltip.Root>
        {/each}
        </div>
      </div>

      <div class="flex-1 flex flex-col gap-2 text-left">
        <div class="md:grid space-y-1">
          <h4 class="underline-offset-2 flex font-sans font-semibold
                      group-hover/whole:text-foreground/100
                      group-data-[open=true]/whole:text-foreground/100">
            <a class="group/link flex items-baseline leading-5 gap-2 hover:gap-4
                  text-foreground/80
                  group-data-[open=true]/whole:text-foreground/100
                  hover:text-secondary"
                  target="_blank" rel="noopener noreferrer" {id} {href}
                  onclick={(e) => e.stopPropagation()}>
              {title}
              <IcBaselineArrowOutward
                  class="w-4 h-4 opacity-0 group-hover/whole:opacity-100 group-data-[open=true]/whole:opacity-100 hidden md:inline"/>
            </a>
          </h4>
          <h4 class="leading-4 mt-0 font-light
                      text-foreground/60
                      group-hover/whole:text-foreground/80
                      group-data-[open=true]/whole:text-foreground/80">
            {subtitle}
          </h4>
        </div>
      </div>
    </Accordion.Trigger>

    <Accordion.Content class="flex flex-row gap-x-4 px-4">
      <div class="hidden md:block md:basis-1/3 lg:basis-[24%] shrink-0"></div>
      <span class="leading-5 text-lg font-normal text-muted-foreground/60">
        {other}
      </span>
    </Accordion.Content>
  </Accordion.Item>
</article>
