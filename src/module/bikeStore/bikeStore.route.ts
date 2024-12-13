import express from 'express';
import { BikeStoreController } from './bikeStore.controller';

const router = express.Router();


// products routes
router.post('/', BikeStoreController.createBike);
router.get('/', BikeStoreController.getAllBikes);
router.get('/:productId', BikeStoreController.getBikeByID);
router.put('/:productId', BikeStoreController.updateBike);
router.delete('/:productId', BikeStoreController.deleteBike);

export const bikeStoreRoutes = router;
