import bikeStoreService from "./bikeStore.service";
import { Request, Response } from 'express';


class BikeStoreController {
    async createBike(req: Request, res: Response){
        try{
            const bike = await bikeStoreService.createBike(req.body);
            res.status(201).json({ message: 'Bike created successfully', success: true, data: bike });
        } catch (err) {
            const error = err as Error;
            res.status(400).json({ 
              message: 'Failed to create bike', 
              success: false, 
              error: error.message || 'An unknown error occurred' 
            });
          }
    }

    async getAllBikes(req: Request, res: Response) {
        try{
    const bikes = await bikeStoreService.getAllBikes(req.query.searchTerm as string);
    res.status(200).json({ message: 'Bikes retrieved successfully', success: true, data: bikes });
    } catch (err) {
        const error = err as Error;
    res.status(500).json({ 
        message: 'Failed to retrieve bikes', 
        success: false, 
        error: error.message || 'An unknown error occurred' });
}
    }



}

export default new BikeStoreController();