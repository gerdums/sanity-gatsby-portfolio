export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cf9d3c46a0970281428e7d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gpf66eua',
                  apiId: '02d62595-6a65-4a32-bac7-897965a7819f'
                },
                {
                  buildHookId: '5cf9d3c41e8ef3fdedaabc97',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qpgbijbm',
                  apiId: 'f77b2b97-990f-4339-af8e-2be504ae5254'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-qpgbijbm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
