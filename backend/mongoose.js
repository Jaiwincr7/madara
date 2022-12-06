// const MongoClient =require("mongodb").MongoClient;
// const username="";
// const uri="mongodb+srv://system:system123@cluster0.byfe4ah.mongodb.net/?retryWrites=true&w=majority";

// const client=new MongoClient(uri);

// async function run(){
//     try{
//         const database=client.db("Anime");
//         const comment=database.collection("comments");
//         const querry={user:username};
//         const user1=await comment.find().toArray();
//         // console.log(user1)
//     }
//     finally{
//         await client.close();
//     }
// }
// run().catch(console.dir);

// export default run;