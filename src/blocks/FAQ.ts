import { Block } from 'payload/types';
import FAQ_Single from "./FAQ_Single";

const FAQBlockType: Block = {
    slug: "faq",
    labels: {
        singular: "Pytania i odpowiedzi",
        plural: "Pytania i odpowiedzi",
    },
    fields: [
        {
            type: "blocks",
            name: "questions",
            labels: {
                singular: "Pytanie i odpowiedź",
                plural: "Pytania i odpowiedzi",
            },
            minRows: 1,
            maxRows: 10,
            blocks: [
                FAQ_Single,
            ]
        },
    ],
}

export default FAQBlockType;