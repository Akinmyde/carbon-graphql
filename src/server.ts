import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs';

import { resolvers } from './consumption/resolvers.js';
import { Consumption } from './consumption/Consumption.js';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

export interface MyContext {
  dataSources: Consumption
};

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers, 
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: new Consumption(),  
    };
  }, 
  listen: { port: 4000 }  
});

console.log(`🚀 Server listening at: ${url}`);
