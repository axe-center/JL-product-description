const mongoose = require('mongoose');
require('dotenv').config();
const uri = `mongodb+srv://JonathonLopez:${process.env.MONGO_PW}@fec-cluster-noads.mongodb.net/Products?retryWrites=true`;
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;
// console.log(`connection`, db);

db.on(`error`, console.log.bind(console, `connection to db error right off the bat`));
db.once(`open`, () => {
    console.log(`made it to the db!`);
})

let productsSchema = mongoose.Schema({
    productId: Number,
    name: String,
    images: Array,
    price: Number,
    description: String,
    tag: String
});

const Products = mongoose.model('Products', productsSchema);

const save = (productId, productName, productImages, productDescription, productPrice, productTag) => {
    let newProduct = new Products({
        productId: productId,
        name: productName,
        images: productImages,
        price: productPrice,
        description: productDescription,
        tag: productTag
    })
   
    newProduct.save((err, success) => {
      if (err) {
        console.log(`failed save of a new product`)
      } else {
        console.log(`successful save of a new product`);
      }
    })
   }


const getAllProducts = (product, callback) => {
    Products.find({})
    .exec()
    .then((data) => {
        console.log(`inside the getAllProcuts method`);
        callback(null, data)
    })
    .catch((err) => {
        console.log(`failed inside getAllProducts`);
        callback(err);
    })
}

module.exports.getAllProducts = getAllProducts;
module.exports.save = save;