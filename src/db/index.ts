import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.1gdoj.mongodb.net/?retryWrites=true&w=majority`;

const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);

export const dbConnection = client.connect();