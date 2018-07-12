import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ShoeCollectionsSchema from "../../api/shoeCollections/ShoeCollections.graphql";
import ShoeCollectionsResolvers from "../../api/shoeCollections/resolvers";

// hsdaddfdffdssafsavfdvfd

const testSchema = `
type Query {
  hi: String
  shoeCollections: [ShoeCollection]
}
`;

const typeDefs = [testSchema, ShoeCollectionsSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Shaun";
    }
  }
};

const resolvers = merge(testResolvers, ShoeCollectionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
