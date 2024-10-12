import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.CONTENTFUL_API_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default client;
