import { Block } from 'payload/types';

const HeroBlockType: Block = {
    slug: "hero",
    labels: {
        singular: "Prezentacja",
        plural: "Prezentacja",
    },
    fields: [
        {
            name: "heading",
            type: "text",
            label: "Nagłówek",
        },
        {
            name: "text",
            type: "richText",
            label: "Tekst",
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            label: "Obrazek w tle",
        }
    ],
}

export default HeroBlockType;