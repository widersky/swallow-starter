import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Media from "./collections/Media";
import Pages from './collections/Pages';
import Settings from "./collections/Settings";
import Forms from "./collections/Forms";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Pages,
    Forms,
    Media,
    Users,
  ],
  globals: [
    Settings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
