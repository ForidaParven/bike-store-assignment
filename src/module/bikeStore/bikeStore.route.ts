import express from 'express';
import bikeStoreController from './bikeStore.controller';


const router = express.Router();

router.post('/api/products/create-bike', bikeStoreController.createBike);
router.get('/api/products', bikeStoreController.getAllBikes);


export const bikeStoreRoutes = router;