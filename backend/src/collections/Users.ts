import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Użytkownik',
    plural: 'Użytkownicy',
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'username',
          type: 'text',
          label: 'Imię',
        },
        {
          name: 'usersurname',
          type: 'text',
          label: 'Nazwisko',
        }
      ]
    }
  ],
};

export default Users;