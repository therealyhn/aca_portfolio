import { defineType, defineField } from "sanity";

export default defineType({
    name: "contactPage",
    title: "CONTACT",
    type: "document",
    fields: [
        defineField({
            name: "intro",
            title: "UVODNI TEKST",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "addressValue",
            title: "Adresa",
            type: "string",
        }),
        defineField({
            name: "emailValue",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "phoneValue",
            title: "Telefon",
            type: "string",
        }),
        defineField({
            name: "instagramHandle",
            title: "Instagram handle",
            type: "string",
        }),
        defineField({
            name: "instagramUrl",
            title: "Instagram link",
            type: "url",
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Contact",
                subtitle: "Kontakt Info",
            };
        },
    },
});
