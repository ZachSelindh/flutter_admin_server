import * as graphql from 'graphql';
import * as mongoose from 'mongoose';
import { UserType } from './user_type';

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const User = mongoose.model('user');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: UserType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { name, email }) {
        return new User({ name, email }).save();
      },
    },
  },
});

export { mutation };
