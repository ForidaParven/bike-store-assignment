import express from 'express';
import { BikeStoreController } from './bikeStore.controller';

const router = express.Router();

// products routes
router.post("/create-bike",BikeStoreController.createBike.bind(BikeStoreController));
router.get("/", BikeStoreController.getAllBikes.bind(BikeStoreController));
router.get("/:productId", BikeStoreController.getBikeByID.bind(BikeStoreController));
router.put("/:productId", BikeStoreController.updateBike.bind(BikeStoreController));
router.delete("/:productId", BikeStoreController.deleteBike.bind(BikeStoreController));


// order routes
router.post("/orders", BikeStoreController.orderBike.bind(BikeStoreController));
router.delete("/orders/revenue", BikeStoreController.calculateRevenue.bind(BikeStoreController));


export const bikeStoreRoutes = router;
