import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://nextjs-events:nextjs-events@cluster0.afmsv5n.mongodb.net/events?retryWrites=true&w=majority',
  );

  return client;
}

export async function insertDocument(client, document) {
  const db = client.db();
  const result = await db.collection('newsletter').insertOne({
    email: userEmail,
  });

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const document = await db.collection(collection).find().sort({ _id: sort }).toArray();

  return document;
}