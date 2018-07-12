import React from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import CollectionForm from './CollectionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, shoeCollections }) => {
if(loading) return null;
return(
<div>
    <RegisterForm />
    <LoginForm />
    <CollectionForm />
    <button onClick={() => Meteor.logout()}>Logout</button>
    <ul>
        {shoeCollections.map(shoeCollection => (
            <li key={shoeCollection._id}>{shoeCollection.name}</li>
        ))}
    </ul>
</div>
)
};

const collectionQuery = gql`
query Collections {
	shoeCollections {
    _id
    name
  }
}
`;

export default graphql(collectionQuery, {
    props: ({data}) => ({...data })
})(App);