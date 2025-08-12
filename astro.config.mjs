import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

export default defineConfig({
  site: "https://jwc20.github.io",
  base: "bnc-docs",
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Goal", slug: "intro/1" },
            { label: "Mastermind", slug: "intro/2" },
            { label: "Gameplay", slug: "intro/3" },
            { label: "Running the code", slug: "intro/4" },
            { label: "Code Structure Overview", slug: "intro/5" },
          ],
        },
        {
          label: "Development",
          items: [
            { label: "Example Guide", slug: "development/1" },
            { label: "Example Guide", slug: "development/2" },
            { label: "Example Guide", slug: "development/3" },
            { label: "Example Guide", slug: "development/4" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [catppuccin()],
    }),
  ],
});
