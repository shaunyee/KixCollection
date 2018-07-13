import ShoeCollections from "./shoeCollections";
import Shoes from "../shoes/shoes";

export default {
  Query: {
    shoeCollections(obj, args, { userId=null }) {
      return ShoeCollections.find({
        userId
      }).fetch();
    }
  },

  ShoeCollection: {
    shoes: (shoeCollection) => {
      return Shoes.find({
        shoeCollectionId: shoeCollection._id
      }).fetch()
    }
  },

  Mutation: {
    createshoeCollection(obj, { name }, { userId }) {
      if(userId) {

        const shoeCollectionId = ShoeCollections.insert({
          name,
          userId
        });
        return ShoeCollections.findOne(shoeCollectionId);
      }
      throw new Error("Unauthorized");
    }
  }
};
