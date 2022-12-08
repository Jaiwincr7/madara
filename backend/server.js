const express = require("express");
const app = express();
const cors = require("cors");
const userschema = require('./userschema');
// const Animeschema = require('./animeschema');
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require("mongodb");
const { response } = require("express");
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
  var collection = (client.db("Anime").collection("comments"));
    const collection2 = client.db("Anime").collection("introduction");
    const collection3 = client.db("Anime").collection("credentials");
  app.get("/data", async (req, res) => {
    collection2.find().toArray((err, result) => {
      res.send(result);
    });
  });

  app.get("/random20", async (req, res) => {
    collection2.find().limit(20).toArray((err, result) => {
      res.send(result);
    });
  });

  app.get("/introductionsort", async (req, res) => {
    collection2.find({}).sort({rank:1}).limit(10).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
      // console.log(result);
    });
  })


  app.get("/comments",async(req,res)=>{
    collection.find().toArray((err, result) => {
      res.send(result);
      console.log(result);
    });

  })

  app.get("/userdata",async (req,res)=>{
    collection3.find({}).toArray((err,result)=>{
      if (err) throw err;
      res.send(result);
      console.log(result);
    })
  })

  app.get("/filter",async (req,res)=>{
      collection2.find({genre:"Thriller"}).limit(10).toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
      })
  })
 
  app.post("/createuser",async(req,res)=>{
    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const newuser=new userschema({
      username,
      password,
      email
    });
    collection3.insertOne(newuser);
    collection3.find().toArray((err,result)=>{
      if (err) throw err;
      res.send(result);
      // console.log(result);
    })

})
});