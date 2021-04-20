// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { localUri, MongoClient } from "../../config";

async function handler(req, res) {
  const client = await MongoClient.connect(localUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (req.method === "DELETE") {
    const db = client.db();

    const docs = await db
      .collection("todos")
      .findOneAndDelete({ id: req.body.id });
    res.status(200).json(docs);
  }

  if (req.method === "PATCH") {
    const db = client.db();

    const docs = await db
      .collection("todos")
      .findOneAndUpdate({ id: req.body.id }, req.body);
    res.status(200).json(docs);
  }

  if (req.method === "POST") {
    const db = client.db();

    const todo = {
      title: req.body.title,
      completed: false,
    };

    const docs = await db.collection("todos").insertOne(todo);

    res.status(200).json(docs);
  }

  client.close();
}

export default handler;
