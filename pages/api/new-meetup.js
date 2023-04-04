// /api/new-meetup

const { MongoClient } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://gajdeg:AYeZPFgjvr6Olh2u@cluster0.6asz3y8.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const results = await meetupsCollection.insertOne(data);
    console.log(results);
    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
