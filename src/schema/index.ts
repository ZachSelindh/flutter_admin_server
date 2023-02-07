import * as graphql from 'graphql';
import { RootQuery } from './root_query_type';
import { mutation } from './mutations';

const { GraphQLSchema } = graphql;

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});

export { schema };