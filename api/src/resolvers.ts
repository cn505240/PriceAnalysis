// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        ping: () => {
            return true;
        }
    }
};