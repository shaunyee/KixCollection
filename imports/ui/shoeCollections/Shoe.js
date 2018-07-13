import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Shoe extends Component {
  toggleTrade = () => {
    this.props.toggleTrade({
      variables: {
        id: this.props.shoe._id
      }
    })
  }
  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.toggleTrade} checked={this.props.shoe.trade}/>
        {this.props.shoe.name}
      </li>
    )
  }
}

const toggleTrade = gql`
  mutation toggleTrade($id: String!) {
    toggleTrade(_id: $id) {
      _id
    }
  }
`;
export default graphql(toggleTrade, {
  name: "toggleTrade",
    options: {
        refetchQueries: ["ShoeCollections"]
    }
})(Shoe);