import { GlobalConfig } from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  label: {
    'en': 'Settings',
    'pl': 'Ustawienia',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Główne',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'mainPage',
                  label: {
                    'en': 'Main page',
                    'pl': 'Strona główna',
                  },
                  type: 'relationship',
                  relationTo: 'page',
                  hasMany: false,
                },
                {
                  name: 'privacyPolicyPage',
                  label: {
                    'en': 'Privacy policy page',
                    'pl': 'Strona polityki prywatności',
                  },
                  type: 'relationship',
                  relationTo: 'page',
                  hasMany: false,
                }
              ]
            }
          ],
        },
        {
          label: 'Dane kontaktowe',
          description: 'Dane umieszczone tutaj są globalne – mogą być używane w różnych miejscach strony, przede wszystkim w okolicy stopki, przy formularzu kontaktowym lub u samej góry strony. Niektóre sekcje strony mogą zawierać opcje wprowadzenia innych informacji.',
          fields: [
            {
              type: 'text',
              name: 'companyName',
              label: {
                'en': 'Company name',
                'pl': 'Nazwa firmy',
              }
            }
          ],
        },
        {
          label: 'SEO',
          description: 'Opcje SEO ustawione tutaj będą używane, jeśli nie zostaną ustawione osobne reguły per strona.',
          fields: [],
        },
        {
          label: {
            'en': 'Cookies',
            'pl': 'Ciasteczka',
          },
          fields: [
            {
              type: 'textarea',
              name: 'cookieInfoText',
              label: 'Tekst informacji o ciasteczkach',
            }
          ],
        },
        {
          label: 'Integracje',
          description: 'W tym miejscu możesz podpiąć swoje konta do zewnętrznych serwisów.',
          fields: [
            {
              type: 'group',
              name: 'socialMedia',
              label: 'Serwisy społecznościowe',
              fields: [
                {
                  name: 'facebook',
                  label: 'Facebook',
                  type: 'text',
                }
              ]
            },
            {
              type: 'group',
              name: 'analytics',
              label: 'Analityka',
              fields: [
                {
                  name: 'googleAnalyticsApiKey',
                  label: 'Klucz API Google Analytics',
                  type: 'text',
                }
              ]
            },
            {
              type: 'group',
              name: 'others',
              label: 'Pozostałe',
              fields: [
                {
                  name: 'googleMapsApiKey',
                  label: 'Klucz API Google Maps',
                  type: 'text',
                },
                {
                  name: 'reCaptchav3ApiKey',
                  label: 'Klucz API Google reCaptcha v3',
                  type: 'text',
                }
              ]
            }
          ],
        },
      ]
    },
  ],
}

export default Settings;
