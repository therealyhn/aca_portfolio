import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'portfolioCategory',
  title: 'Portfolio kategorija',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Redosled kategorije',
      type: 'number',
      description: 'Manji broj = viša pozicija u listi',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'title',
      title: 'Naziv kategorije',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Podnaslov (opciono)',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Kratak opis (ispod kartice)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'coverImage',
      title: 'Naslovna slika kategorije',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImageAlt',
      title: 'Alt tekst za naslovnu sliku',
      type: 'string',
      description: 'Kratak opis slike (za SEO i pristupačnost)',
    }),

    // SEO polja (za buduće meta tagove)
    defineField({
      name: 'seoTitle',
      title: 'SEO naslov (opciono)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO opis (opciono)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'works',
      title: 'Radovi u kategoriji',
      type: 'array',
      of: [
        {
          name: 'work',
          title: 'Rad',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Naslov rada',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alt tekst slike',
              type: 'string',
              description: 'Opis slike (SEO + screen reader)',
            }),
            defineField({
              name: 'image',
              title: 'Slika',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
      description:
        'Redosled možeš menjati drag & drop-om – taj redosled se prikazuje na sajtu.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'subtitle',
    },
    prepare({title, media, subtitle}) {
      return {
        title: title || 'Bez naslova',
        subtitle: subtitle || 'Portfolio kategorija',
        media,
      }
    },
  },
})
