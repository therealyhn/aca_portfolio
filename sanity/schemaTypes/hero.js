import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Home Page (Početna)',
    type: 'document',
    fields: [
        defineField({
            name: 'backgroundImage',
            title: 'Baner (Pozadinska slika)',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alt tekst slike',
            type: 'string',
            description: 'Kratak opis slike zbog SEO/pristupačnosti',
        }),
    ],
    preview: {
        select: {
            media: "backgroundImage",
            title: "alt"
        },
        prepare({ media, title }) {
            return {
                title: title || "Hero section image",
                subtitle: "Pozadinska slika za početnu stranu",
                media
            }
        }
    }

})
