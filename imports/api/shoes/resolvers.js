import Shoes from "./shoes";

export default {
  Mutation: {
    createShoe(obj, { name, shoeCollectionId }) {
      const shoeId = Shoes.insert({
        name,
        shoeCollectionId,
        trade: false
      });
      return Shoes.findOne(shoeId);
  },

  toggleTrade(obj, { _id }) {
   const shoe = Shoes.findOne(_id);
    Shoes.update(_id, {
      $set: {
        trade: !shoe.trade
      }
    }); 
    return Shoes.findOne(_id);
   }
  }
};