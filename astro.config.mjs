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
            { label: "Goal", slug: "development/1" },
            { label: "Game Library", items: [{ label: "Goal", slug: "development/game/1" }] },
            { label: "Backend API", slug: "development/2" },
            { label: "Frontend Client", slug: "development/3" },
            { label: "Deployment", slug: "development/4" },
          ],
        },
                {
          label: "Reflections",
          items: [
            { label: "What I did", slug: "reflection/1" },
            { label: "What I learned", slug: "reflection/2" },
            { label: "What can I improve", slug: "reflection/3" },
            { label: "Ideas", slug: "reflection/4" },
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
