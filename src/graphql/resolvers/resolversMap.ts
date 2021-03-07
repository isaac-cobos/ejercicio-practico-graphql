import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
  Query: {
    hello() {
      return 'world';
    },
    getCharacters() {
      return [
        {
          id: 1,
          name: 'Superman',
          race: 'SuperHéroe',
        },
        {
          id: 2,
          name: 'Batman',
          race: 'SuperHéroe',
        },
      ];
    },
  },
};

export default resolvers;
