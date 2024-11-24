import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { bikeStoreRoutes } from './module/bikeStore/bikeStore.route';

const app: Application = express();

// middleWare
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', bikeStoreRoutes);
app.use('/api', bikeStoreRoutes);


const getAController = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .json({ message: 'Welcome to the Bike Store API!', success: true });
};

app.get('/', getAController);

export default app;
