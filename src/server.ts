import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { router } from './routes';
import { schema } from './schema';
import { dbConnection } from './db';

const app = express();

dbConnection.then(() => console.log("Connected to MongoDB"));

const corsOptions = {
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.all('/graphql', createHandler({ schema }));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
