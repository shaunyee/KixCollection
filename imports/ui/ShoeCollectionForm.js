import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createShoeCollection = gql`
  mutation createshoeCollection($name: String!) {
    createshoeCollection(name: $name) {
      _id
    }
  }
`;

class ShoeCollectionForm extends Component {
  submitForm = () => {
    this.props
      .createShoeCollection({
        variables: {
          name: this.name.value
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default graphql(createShoeCollection, {
  name: "createShoeCollection",
  options: {
    refetchQueries: ["ShoeCollections"]
  }
})(ShoeCollectionForm);
