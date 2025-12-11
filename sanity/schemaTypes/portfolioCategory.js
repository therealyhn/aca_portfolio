import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'portfolioCategory',
    title: 'Portfolio kategorija',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Naslov kategorije',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug (URL-Friendly naziv)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),

        defineField({
            name: 'order',
            title: 'Redosled kategorije',
            type: 'number',
            description: 'Manji broj = viša pozicija u listi',
        }),

        defineField({
            name: 'description',
            title: 'Opis kategorije',
            type: 'text',
            rows: 3,
        }),

        defineField({
            name: 'coverImage',
            title: 'Naslovna slika kategorije',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),

        // SEO za kategoriju
        defineField({
            name: 'seoTitle',
            title: 'SEO naslov',
            type: 'string',
            description: 'Ako se ostavi prazno, koristi se glavni naslov.',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO opis',
            type: 'text',
            rows: 3,
            description: 'Kratak opis za pretraživače.',
        }),

        // RADOVI unutar kategorije
        defineField({
            name: 'works',
            title: 'Radovi u ovoj kategoriji',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'work',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Naslov rada',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'image',
                            title: 'Slika rada',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt tekst (SEO)',
                            type: 'string',
                            description: 'Opis slike za SEO i pristupačnost.',
                        }),
                        defineField({
                            name: 'seoTitle',
                            title: 'SEO naslov rada',
                            type: 'string',
                            description: 'Ako je prazno, koristi se naslov rada.',
                        }),
                        defineField({
                            name: 'seoDescription',
                            title: 'SEO opis rada',
                            type: 'text',
                            rows: 2,
                        }),
                    ],
                },
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'coverImage',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Portfolio kategorija',
                media,
            }
        },
    },
})
