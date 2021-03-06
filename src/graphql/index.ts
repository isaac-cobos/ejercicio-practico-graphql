//importamos esto que es una interfaz
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
//nos traemos la libreria necesaria para importar archivos GRAPHQL
//Esto es para que node pueda entender que archivos son.
import 'graphql-import-node';
import rootSchema from './schemas/schema.graphql';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
});
