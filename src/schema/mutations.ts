import * as graphql from 'graphql';
import * as mongoose from 'mongoose';
import { UserType } from './user_type';

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const User = mongoose.model('user');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parentValue, { name, email }) {
        return new User({ name, email }).save();
      },
    },
    updateUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parentValue, { id, name, email }) {
        return User.findByIdAndUpdate(id, { name, email });
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return User.findOneAndRemove(id);
      },
    },
  },
});

export { mutation };
