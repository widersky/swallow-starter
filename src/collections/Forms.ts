import type { CollectionConfig } from 'payload/types';

const Forms: CollectionConfig = {
    slug: 'forms',
    labels: {
        singular: 'Formularz',
        plural: 'Formularze',
    },
    fields: [
        {
            name: 'form',
            type: 'blocks',
            label: 'Formularz',
            minRows: 1,
            blocks: [

            ]
        }
    ],
};

export default Forms;
