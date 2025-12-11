// sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'AJCREATIVE | Portfolio',

  projectId: '9f69jymo',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Sadržaj sajta')
          .items([
            // Hero
            S.listItem()
              .title('Banner sekcija')
              .child(S.documentTypeList('hero').title('Sve Hero slike')),

            // About
            S.listItem()
              .title('O meni')
              .child(S.documentTypeList('aboutPage').title('O meni')),

            S.divider(),

            // Portfolio
            S.listItem()
              .title('Portfolio')
              .child(
                S.list()
                  .title('Portfolio')
                  .items([
                    S.listItem()
                      .title('Kategorije')
                      .child(S.documentTypeList('portfolioCategory').title('Portfolio kategorije')),
                    // Ako imaš još nešto za portfolio, ide ovde
                  ]),
              ),

            S.divider(),

            // BLOG / NEWS
            S.listItem()
              .title('Blog / News')
              .child(S.documentTypeList('newsPost').title('Objave')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
