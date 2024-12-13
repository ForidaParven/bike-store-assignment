import express from 'express';
import { OrderStoreController } from './orderStore.controller';

const router = express.Router();

// orders routes
router.get('/revenue', OrderStoreController.calculateRevenue);
router.post('/', OrderStoreController.orderBike);


export const orderStoreRoutes = router;
