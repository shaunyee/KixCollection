import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createCollection = gql`
    mutation createCollection($name: String!) {
        createCollection(name: $name) {
            _id
        }
    }
`;

class CollectionForm extends Component {
    submitForm = () => {
        this.props.createCollection({
            variables: {
                name: this.name.value
            }
        }).catch(error => {
            console.log(error)
        });
    }

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)}/>
        <button onClick={this.submitForm}>Create a New Collection!</button>
      </div>
    )
  }
}
export default graphql(createCollection, {
    name: "createCollection",
    options: {
        refetchQueries: ['Collections']
    }
})(CollectionForm);