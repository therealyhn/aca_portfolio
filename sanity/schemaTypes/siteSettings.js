import { defineType, defineField } from "sanity";

export default defineType({
    name: "siteSettings",
    title: "SITE SETTINGS",
    type: "document",
    fields: [
        defineField({
            name: "navLogoLight",
            title: "Navbar logo (light)",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "navLogoDark",
            title: "Navbar logo (dark)",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "footerLogo",
            title: "Footer logo",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "socials",
            title: "Footer socials",
            type: "array",
            of: [
                defineField({
                    name: "social",
                    title: "Social link",
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: { hotspot: true },
                        }),
                    ],
                    preview: {
                        select: {
                            title: "label",
                            subtitle: "url",
                            media: "icon",
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Site Settings",
                subtitle: "Logos and socials",
            };
        },
    },
});
