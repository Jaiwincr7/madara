const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://system:system123@cluster0.byfe4ah.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  app.listen(8000, () => {
    console.log("asjfijanf");
  });

  app.get("/data", async (req, res) => {
    var collection = (client.db("Anime").collection("comments"));
    const collection2 = client.db("Anime").collection("introduction");
    const collection3 = client.db("Anime").collection("credencials");
    collection2.find().toArray((err, result) => {
      res.send(result);
    });
    // collection2.find().toArray((err, result) => {
    //   res.send(result);
    // });
    // collection3.find().toArray((err, result) => {
    //   res.send(result);
    // });
    // module.exports=  {collection,collection2,collection3};
  });
  app.get("/comments", async (req, res) => {
    var collection = (client.db("Anime").collection("comments"));
    const collection2 = client.db("Anime").collection("introduction");
    const collection3 = client.db("Anime").collection("credencials");
    collection.find().toArray((err, result) => {
      res.send(result);
    });
  })
});