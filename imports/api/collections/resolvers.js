import ShoeCollections from './shoeCollections';


export default {
    Query: {
        shoeCollections() {
            return ShoeCollections.find({}).fetch();
        }
    },
    Mutation: {
        createCollection(obj, { name }, context) {
           const shoeCollectionId = ShoeCollections.insert({
            name
            });
            return ShoeCollections.findOne(shoeCollectionId)
        }
    }
};