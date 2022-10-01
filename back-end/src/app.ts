import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHanddlerMiddleware';

dotenv.config();

const app: express.Express = express();

app.use([cors(), json(), errorHandlerMiddleware]);

export default app;