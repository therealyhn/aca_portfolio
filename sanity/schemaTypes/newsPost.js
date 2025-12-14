// sanity/schemaTypes/newsPost.js
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'newsPost',
    title: 'News / Blog objave',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Naslov',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Datum objave',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'string',
            description: 'Ime autora (npr. "Aleksandar Jovanović")',
        }),
        defineField({
            name: 'mainImage',
            title: 'Naslovna slika',
            type: 'image',
            description: '1200x800 najbolja rezolucija',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt tekst slike',
                    type: 'string',
                    description: 'Kratak opis slike zbog SEO/pristupačnosti',
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Sadržaj objave',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Glavni tekst (Podeljen po paragrafima)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'highlightQuote',
            title: 'Istaknuti citat',
            type: 'string',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'News objava',
                subtitle: subtitle || 'News / Blog',
                media,
            }
        },
    },
})
