import { ApolloServer } from 'apollo-server';
import db from './lib/db';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => db });

server.listen(9999).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
