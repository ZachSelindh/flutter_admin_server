import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.1gdoj.mongodb.net/?retryWrites=true&w=majority`;

const URL = `mongodb+srv://${process.env.MONGO_DB_FLUTTER_USERNAME}:${process.env.MONGO_DB_FLUTTER_PASSWORD}@cluster0.ypen9fa.mongodb.net/?retryWrites=true&w=majority`;

const client: mongoDB.MongoClient = new mongoDB.MongoClient(URL);

export const dbConnection = client.connect();