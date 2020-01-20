import { importSchema } from 'graphql-import';

const typeDefs = importSchema('src/data/schema.graphql');

export { typeDefs }