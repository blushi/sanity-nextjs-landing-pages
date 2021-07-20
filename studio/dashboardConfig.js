export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f6a081a187b6b58290cd3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aug2qhgd',
                  apiId: 'f3c2ea1a-21b1-45a9-a8f8-0282e437345e'
                },
                {
                  buildHookId: '60f6a08109d5eeb50f7cb110',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dua6om3h',
                  apiId: '5614d72a-f4e6-41cc-81d9-eea6d59d05b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blushi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dua6om3h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
