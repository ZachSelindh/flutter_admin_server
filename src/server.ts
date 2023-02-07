import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { router } from './routes';
import { schema } from './schema';
import { dbConnection } from './db';

const app = express();

dbConnection.then(() => console.log("Connected to MongoDB"));

const PORT = process.env.PORT || 3000;

app.all('/graphql', createHandler({ schema }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
