import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { bikeStoreRoutes } from './module/bikeStore/bikeStore.route';
// import errorHandler from './middleWare/errHandler';

const app = express();

// middleWare
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', bikeStoreRoutes);
// app.use('/api', bikeStoreRoutes);
app.use('/api/orders', bikeStoreRoutes);
// app.use(errorHandler);

export default app;
