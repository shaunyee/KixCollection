import ShoeCollections from "./shoeCollections";

export default {
  Query: {
    shoeCollections(obj, args, { userId=null }) {
      return ShoeCollections.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createshoeCollection(obj, { name }, { userId }) {
      const shoeCollectionId = ShoeCollections.insert({
        name,
        userId
      });
      return ShoeCollections.findOne(shoeCollectionId);
    }
  }
};
