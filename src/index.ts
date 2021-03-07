import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

//servidor express
const app = express();
app.use(cors());

//este servidor va a ser el servidor de GraphQL
const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

//aplicamos este middleware de ApolloServer y le pasamos el servidor express
server.applyMiddleware({ app });

app.listen(5000, () => {
  console.log('http://localhost:5000');
});
