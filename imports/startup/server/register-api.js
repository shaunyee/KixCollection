import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ShoeCollectionsSchema from "../../api/shoeCollections/ShoeCollections.graphql";
import UsersSchema from "../../api/users/User.graphql";
import ShoeSchema from "../../api/shoes/Shoe.graphql";
import ShoeCollectionsResolvers from "../../api/shoeCollections/resolvers";
import UsersResolvers from "../../api/users/resolvers";
import ShoesResolvers from "../../api/shoes/resolvers";

// h=fdfdf


const typeDefs = [ShoeCollectionsSchema, ShoeSchema, UsersSchema];

const resolvers = merge(ShoeCollectionsResolvers, ShoesResolvers ,UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
