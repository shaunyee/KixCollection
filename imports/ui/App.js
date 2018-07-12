import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import ShoeCollectionForm from "./ShoeCollectionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const App = ({ loading, shoeCollections, client }) => {
  if (loading) return null;
  return (
    <div>
      <button
        onClick={() => {
          Meteor.logout();
          client.resetStore();
        }}
      >
        Logout
      </button>
      <RegisterForm client={client} />
      <LoginForm client={client} />
      <ShoeCollectionForm />
      <ul>
        {shoeCollections.map(shoeCollection => (
          <li key={shoeCollection._id}>{shoeCollection.name}</li>
        ))}
      </ul>
    </div>
  );
};

const shoeCollectionsQuery = gql`
  query ShoeCollections {
    shoeCollections {
      _id
      name
    }
  }
`;

export default graphql(shoeCollectionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
