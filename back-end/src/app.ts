import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Express = express();

app.use([cors(), json()]);

export default app;