import { MongoClient } from "../deps.ts";

export const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

// const db = client.database("test");
// const users = db.collection("users");
