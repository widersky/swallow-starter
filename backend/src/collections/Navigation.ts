import { GlobalConfig } from 'payload/types';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: {
    'en': 'Navigation',
    'pl': 'Nawigacja',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Górna',
          fields: [],
        },
        {
          label: 'Boczna',
          fields: [],
        },
        {
          label: 'W stopce',
          fields: [],
        },
      ]
    },
  ],
}

export default Navigation;