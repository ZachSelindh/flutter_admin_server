import * as graphql from 'graphql';
import * as mongoose from 'mongoose';
import { UserType } from './user_type';
import '../models/user';

const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;

const User = mongoose.model('user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return User.findById(id);
      },
    },
  }),
});

export { RootQuery };