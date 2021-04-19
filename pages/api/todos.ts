// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { localUri, MongoClient } from "../../config";

async function handler(req, res) {
  const client = await MongoClient.connect(localUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (req.method === "GET") {
    const db = client.db();

    const docs = await db.collection("todos").find().toArray();

    res.status(200).json(docs);
  }

  client.close();
}

export default handler;
