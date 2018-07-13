import React, { Component, Fragment } from 'react';
import Shoe from "./Shoe";
import ShoeForm from "./ShoeForm";
import Card from '@material-ui/core/Card';

class ShoeCollection extends Component {
  render() {
      const { shoeCollections } = this.props;
    return (
      <Fragment>
        <ul>
            {shoeCollections.map(shoeCollection => (
            <Card key={shoeCollection._id}>{shoeCollection.name}
        <ul>
            {shoeCollection.shoes.map(shoe => (
            <Shoe shoe={shoe} key={shoe._id} />
        ))}
        </ul>
            <ShoeForm shoeCollectionId={shoeCollection._id}/>
        </Card>
    ))}
    </ul> 
        </Fragment>
        )
    }
}
export default ShoeCollection;
