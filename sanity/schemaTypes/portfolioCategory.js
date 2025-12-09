// ./schemas/portfolioCategory.js
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'portfolioCategory',
    title: 'PORTFOLIO – Kategorije',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Naziv kategorije',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Opis kategorije',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'coverImage',
            title: 'Naslovna slika kartice',
            type: 'image',
            options: { hotspot: true },
            description: 'Slika koja se prikazuje na kartici kategorije.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Redosled (manji broj = ranije)',
            type: 'number',
            initialValue: 1,
        }),

        // GALLERY – radovi unutar kategorije
        defineField({
            name: 'works',
            title: 'Radovi u ovoj kategoriji',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'workItem',
                    title: 'Rad',
                    fields: [
                        {
                            name: 'title',
                            title: 'Naslov rada',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'image',
                            title: 'Slika rada',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                            subtitle: 'subtitle',
                        },
                    },
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'coverImage',
            subtitle: 'subtitle',
        },
        prepare({ title, media, subtitle }) {
            return {
                title: title || 'Portfolio kategorija',
                subtitle: subtitle || 'Kategorija portfolija',
                media,
            }
        },
    },
})
