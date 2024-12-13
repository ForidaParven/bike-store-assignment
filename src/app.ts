import express, { Request, Response} from 'express';
import cors from 'cors';
import { bikeStoreRoutes } from './module/bikeStore/bikeStore.route';
import { orderStoreRoutes } from './module/orderStore/orderStore.route';

const app = express();

// middleWare
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', bikeStoreRoutes);
app.use('/api/orders', orderStoreRoutes);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello bike Store World!')
  })

export default app;
