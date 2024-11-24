import express, { Request, Response} from 'express';
import cors from 'cors';
import { bikeStoreRoutes } from './module/bikeStore/bikeStore.route';

const app = express();

// middleWare
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', bikeStoreRoutes);
app.use('/api/orders', bikeStoreRoutes);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello bike Store World!')
  })

export default app;
