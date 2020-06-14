// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        ping: Boolean!
    }
`;