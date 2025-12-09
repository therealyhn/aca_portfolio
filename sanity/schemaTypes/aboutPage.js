import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page (O meni)',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Profilna slika',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heading',
            title: 'Naslov',
            type: 'string',
            description: 'Npr. "O meni"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'intro',
            title: 'Glavni tekst',
            type: 'text',
            rows: 6,
            description: 'Tekst pored slike',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bullets',
            title: 'Lista (4 stavke)',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) =>
                Rule.min(1)
                    .max(4)
                    .warning('Preporuka je do 4 stavke (kao u dizajnu).'),
        }),
        defineField({
            name: 'cvFile',
            title: 'CV fajl',
            type: 'file',
            options: {
                accept: '.pdf,.doc,.docx',
            },
            description: 'Ovaj fajl će se vezati na dugme "Preuzmi CV".',
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
