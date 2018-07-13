import React, { Fragment } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import ShoeCollectionForm from "./ShoeCollectionForm";
import ShoeCollection from "./shoeCollections/ShoeCollection";
import Header from "./header/Header";
import Loading from "./utilities/Loading";



const App = ({ loading, shoeCollections, client, user }) => {
  if (loading) return <Loading />;
  return (
    <div>
      <Header user={user} client={client} />
      { user._id &&
        <ShoeCollectionForm />
      }
      { user._id && (
      <ShoeCollection shoeCollections={shoeCollections}/>
      )}
    </div>
  );
};

const shoeCollectionsQuery = gql`
  query ShoeCollections {
    shoeCollections {
      _id
      name
      shoes {
        _id
        name
        trade
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(shoeCollectionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
