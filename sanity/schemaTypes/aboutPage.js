import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'ABOUT PAGE',
    type: 'document',
    description: 'O meni',
    fields: [
        defineField({
            name: 'image',
            title: 'PROFILNA SLIKA',
            type: 'image',
            options: { hotspot: true },
            description: 'Bilo koja rezolucija',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heading',
            title: 'NASLOV',
            type: 'string',
            description: 'Npr. "O meni"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'intro',
            title: 'GLAVNI TEKST',
            type: 'text',
            rows: 6,
            description: 'Tekst pored slike',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bullets',
            title: 'LISTA',
            type: 'array',
            description: '4 stavke',
            of: [{ type: 'string' }],
            validation: (Rule) =>
                Rule.min(1)
                    .max(4)
                    .warning('Preporuka je do 4 stavke (kao u dizajnu).'),
        }),
        defineField({
            name: 'cvFile',
            title: 'CV FILE',
            type: 'file',
            options: {
                accept: '.pdf,.doc,.docx,.jpeg',
            },
            description: 'Dozvoljeni tipovi fajla su .pdf, .doc, .docx i .jpeg.',
        }),
    ],

    preview: {
        select: {
            title: 'heading',
            media: 'image',
        },
        prepare({ title, media }) {
            return {
                title: title || 'About Page',
                subtitle: 'Sekcija "O meni"',
                media,
            }
        },
    },
})
