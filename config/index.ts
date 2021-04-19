export const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USER}:${process.env.REACT_APP_MONGO_PASS}@cluster0.59ndz.mongodb.net/${process.env.REACT_APP_MONGO_DB}?retryWrites=true&w=majority`;

export const localUri = "mongodb://localhost/todos";

export const MongoClient = require("mongodb").MongoClient;
