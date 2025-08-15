import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'

export default defineConfig({
  site: 'https://jwc20.github.io',
  base: 'bnc-docs',
  integrations: [
    starlight({
      title: 'Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight'
        }
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            // { label: 'Preface', slug: 'intro/00-preface' },
            { label: 'Multiplayer', slug: 'intro/01-intro' },
            { label: 'Requirements', slug: 'intro/02-req' },
            { label: 'Overview', slug: 'intro/03-overview' },
            { label: 'Development Timeline', slug: 'intro/04-timeline' },
            { label: 'Tools', slug: 'intro/05-tools' }
          ]
        },
        {
          label: 'Development',
          items: [
            {
              label: 'Game Library',
              items: [
                { label: 'Overview', slug: 'dev/lib/01-overview' },
                { label: 'Algorithm', slug: 'dev/lib/02-algorithm' },
                { label: 'Implementation', items:[
                    { label: 'Development Process', slug: 'dev/lib/imp/01-dev' },
                    { label: 'Architecture Evolution and Technical Debt', slug: 'dev/lib/imp/02-tech-debt' },
                ] }
              ]
            },
            { label: 'Backend API', slug: 'dev/02-backend' },
            // { label: 'Frontend Client', slug: 'dev/3' },
            // { label: 'Deployment', slug: 'dev/4' }
          ]
        }
        //         {
        //   label: "Reflections",
        //   items: [
        //     { label: "What I did", slug: "reflection/1" },
        //     { label: "What I learned", slug: "reflection/2" },
        //     { label: "What can I improve", slug: "reflection/3" },
        //     { label: "Ideas", slug: "reflection/4" },
        //   ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      plugins: [catppuccin()]
    })
  ]
})
