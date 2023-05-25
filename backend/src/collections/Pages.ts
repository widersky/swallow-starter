import { CollectionConfig } from 'payload/types';

// Blocks import
import Hero from "../blocks/Hero";
import FAQ from "../blocks/FAQ";
import HeroSlider from "../blocks/HeroSlider";

const Pages: CollectionConfig = {
  slug: 'page',
  labels: {
    singular: {
      'en': 'Subpage',
      'pl': 'Podstrona',
    },
    plural: {
      'en': 'Subpages',
      'pl': 'Podstrony',
    },
  },
  admin: {
    defaultColumns: [ 'title', 'author', 'category', 'tags', 'status' ],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        'en': 'Title',
        'pl': 'Tytuł',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Budowa strony',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: 'Sekcje',
              labels: {
                singular: 'Sekcja',
                plural: 'Sekcje',
              },
              minRows: 1,
              maxRows: 10,
              blocks: [
                Hero,
                HeroSlider,
                FAQ,
              ]
            },
          ]
        },
        {
          label: 'SEO',
          description: 'W przypadku niewypełnienia poniższych pól, zostaną użyte domyślne wartości - tytuł strony oraz globalny opis strony.',
          fields: [
            {
              name: 'seotitle',
              type: 'text',
              label: 'Tytuł SEO',
            },
            {
              name: 'seodescription',
              type: 'textarea',
              label: 'Opis SEO',
              maxLength: 160,
            }
          ]
        }
      ]
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Szkic',
        },
        {
          value: 'published',
          label: 'Opublikowany',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Data publikacji',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Autor',
      admin: {
        position: 'sidebar',
      }
    },
  ],
}

export default Pages;
