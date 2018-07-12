import ShoeCollectionSchema from '../../api/collections/ShoeCollection.graphql';
import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import ShoeCollectionResolvers from '../../api/collections/resolvers';

import merge from 'lodash/merge';


import './register-api';

// fdjk

const testSchema = `
type Query {
    hi: String
    shoeCollections : [ShoeCollection]
}
`

const typeDefs = [
    testSchema,
    ShoeCollectionSchema
];


const testresolver = {
    Query: {
        hi() {
            return "Hello Shaun"
        }
    }
};

const resolvers = merge(testresolver, ShoeCollectionResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema});