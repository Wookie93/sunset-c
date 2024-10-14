import { GraphQLClient } from 'graphql-request';

console.log(process.env.CONTENTFUL_GRAPHQL_ENDPOINT, 'process.env.CONTENTFUL_GRAPHQL_ENDPOINT')
console.log(process.env.CONTENTFUL_ACCESS_TOKEN, 'process.env.CONTENTFUL_ACCESS_TOKEN')

const client = new GraphQLClient(process.env.CONTENTFUL_GRAPHQL_ENDPOINT!, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default client;
