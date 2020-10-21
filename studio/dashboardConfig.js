export default {
  widgets: [
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
                  buildHookId: '5f9088828a1d252144eb6417',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-spy66oj5',
                  apiId: 'aac751eb-7963-4679-8dcb-17fe759ebfd6'
                },
                {
                  buildHookId: '5f9088828120681ba64c3e33',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-cgjrizoo',
                  apiId: '2e29bc88-cd32-4e0c-a69c-768c02d865d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acifuentes83/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-cgjrizoo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
