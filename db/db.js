const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/products`, {useNewUrlParser: true});
const db = mongoose.connection;

db.on(`error`, console.log.bind(console, `connection to db error`));
db.once(`open`, () => {
    console.log(`made it to the db!`);
})

let productsSchema = mongoose.Schema({
    name: String,
    image: Array,
    price: Number,
    description: String,
    tag: String
});

const Products = mongoose.model('Products', productsSchema);