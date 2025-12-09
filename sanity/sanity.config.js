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
            // Pregled svih hero slika 
            S.listItem()
              .title('Banner sekcija')
              .child(
                S.documentTypeList('hero')
                  .title('Sve Hero slike')
              ),

            // About sekcija 
            S.listItem()
              .title('O meni')
              .child(
                S.documentTypeList('aboutPage')
                  .title('O meni')
              ),

            S.divider(),

            // PORTFOLIO 
            S.listItem()
              .title('Portfolio')
              .child(
                S.documentTypeList('portfolioCategory')
                  .title('Portfolio kategorije')
              ),
            S.divider(),

            //  BLOG / NEWS
            // S.listItem()
            //   .title('Blog / News')
            //   .child(
            //     S.documentTypeList('newsPost').title('Objave')
            //   ),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
