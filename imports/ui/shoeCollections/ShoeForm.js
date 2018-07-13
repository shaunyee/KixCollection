import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createShoe = gql`
  mutation createShoe($name: String!, $shoeCollectionId: String!) {
    createShoe(name: $name, shoeCollectionId: $shoeCollectionId) {
      _id
    }
  }
`;

class ShoeForm extends Component {
  submitForm = () => {
    this.props
      .createShoe({
        variables: {
          name: this.name.value,
          shoeCollectionId: this.props.shoeCollectionId
        }
      }).then(() => {
        this.name.value = ""
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

export default graphql(createShoe, {
  name: "createShoe",
    options: {
        refetchQueries: ["ShoeCollections"]
    }
})(ShoeForm);
