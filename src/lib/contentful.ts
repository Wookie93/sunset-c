import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.CONTENTFUL_GRAPHQL_ENDPOINT!, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default client;