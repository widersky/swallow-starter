import { Block } from 'payload/types';

const FAQSingleBlockType: Block = {
    slug: "faq-single",
    labels: {
        singular: "Pytanie",
        plural: "Pytania",
    },
    fields: [
        {
            name: "question",
            type: "text",
            label: "Pytanie",
        },
        {
            name: "answer",
            type: "richText",
            label: "Odpowiedź",
        },
    ],
}

export default FAQSingleBlockType;