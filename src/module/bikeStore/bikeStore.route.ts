import express from 'express';
import { BikeStoreController } from './bikeStore.controller';

const router = express.Router();

// products routes
router.get('/revenue', BikeStoreController.calculateRevenue);
router.post('/create-bike', BikeStoreController.createBike);
router.get('/', BikeStoreController.getAllBikes);
router.post('/', BikeStoreController.orderBike);

router.get('/:productId', BikeStoreController.getBikeByID);
router.put('/:productId', BikeStoreController.updateBike);
router.delete('/:productId', BikeStoreController.deleteBike);

export const bikeStoreRoutes = router;
