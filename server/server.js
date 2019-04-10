const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const port = process.env.port || 3000;
const {getAllProducts} = require(`../db/db.js`);
const cors = require(`cors`);
require('dotenv').config();
const AWS = require(`aws-sdk`);
const {save} = require(`../db/db.js`);
// console.log(`env vars`, process.env);

AWS.config.update({
    accessKeyId: process.env.s3accesskey,
    secretAccessKey: process.env.s3secretkey,
    region: 'us-east-2'
 });
 
 const s3 = new AWS.S3();
//  console.log(`this is s3`, s3.listObjects);

 const params = {
    Bucket: 'fecproject'
 }

app.use(express.static(`dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get(`/api`, (req, res) => {
//     res.send({objectId: 1})
// })

app.get(`/api/products`, (req, res) => {
    getAllProducts(req.body, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.send(data);
        }
    });
})
app.post(`/seed`, (req, res) => {
    s3.listObjects(params, function (err, data) {
        if(err) {
            console.log(err);
            res.end()
        } else {
            const urlArr = [];
            // console.log(`data contents`, data)
            for (let i = 0; i < data.Contents.length; i++) {
                let path = data.Contents[i].Key.replace(' ','+');
                // console.log(`contents at key`, data.Contents[i].Key);
                urlArr.push('https://s3.us-east-2.amazonaws.com/fecproject/'+ path)
            }

            // db.save();
            // console.log(`the array`, urlArr);
            
            const randomDescriptions = dummyData.description.filter(value => {
                return value !== '';
            });
            // console.log(`your descriptions`, randomDescription)
            const randomNames = dummyData.name.filter(value => {
                return value !== '';
            })
            // console.log(`your titles`, randomNames)
            for (let i = 0; i < randomDescriptions.length; i++) {
                const img1 = Math.floor(Math.random()*(urlArr.length))
                const img2 = Math.floor(Math.random()*(urlArr.length))
                const img3 = Math.floor(Math.random()*(urlArr.length))
                const tagIndex = Math.floor(Math.random()*(tags.length))
 
                const productPrice = Math.floor(Math.random()*2000) + 500
                const productImages = [urlArr[img1], urlArr[img2], urlArr[img3]];
                const productName = randomNames[i];
                const productDescription = randomDescriptions[i];
                const productTag = tags[tagIndex]
                const productId = i+1
 
                save(productId, productName, productImages, productDescription, productPrice, productTag)
            }
            res.send(data)
        }
        res.end();
    });
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});