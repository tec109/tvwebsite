import Express from 'express';

const app = Express();
app.get('/', (req: Express.Request, res: Express.Response) =>
    {res.send('Hello World!')}
);
app.listen(3000, () => console.log('Server started!'));