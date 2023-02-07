import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/hello-world', (request: Request, response: Response) => {
    response.send('Hello world!');
});

router.get('/*', (request: Request, response: Response) => {
    response.send('Are you lost?!');
});

export { router };