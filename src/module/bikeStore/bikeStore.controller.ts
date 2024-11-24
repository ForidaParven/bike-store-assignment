
import { Request, Response ,NextFunction} from 'express';
import { BikeStoreService } from './bikeStore.service';


export class BikeStoreController {
    static async createBike(req: Request, res: Response){
        try{
            const bike = await BikeStoreService.createBike(req.body);
            res.status(201).json({ message: 'Bike created successfully', success: true, data: bike });
        } catch (err) {
            res.status(400).json({ 
              message: 'Failed to create bike', 
              success: false, 
              error: (err instanceof Error) ? err.message : 'An unknown error occurred' 

            });
          }
    }

    static async  getAllBikes(req: Request, res: Response) {
        try{
    const bikes = await BikeStoreService.getAllBikes(req.query.searchTerm as string);
    res.status(200).json({ message: 'Bikes retrieved successfully', success: true, data: bikes });
    } catch (err) {
        
    res.status(500).json({ 
        message: 'Failed to retrieve bikes', 
        success: false, 
        error: (err instanceof Error) ? err.message : 'An unknown error occurred' 
 });
}
    }

    static async getBikeByID(req: Request, res:Response, next: NextFunction) {
        try{
    const bike = await BikeStoreService.getBikeById(req.params.productId);
    if (!bike) 
        return res.status(404).json({ 
    message: 'Bike not found', 
    success: false });
    res.status(200).json({ 
        message: 'Bike retrieved successfully', success: true, 
        data: bike });
} 

    catch(err){
        next(err);
        }
    }

    static async updateBike(req: Request, res:Response, next: NextFunction) {
        try{
            const bike = await BikeStoreService.updateBike(req.params.productId, req.body);
            if (!bike) 
                return res.status(404).json({ 
            message: 'Bike not found', 
            success: false });
            res.status(200).json({
                 message: 'Bike updated successfully', 
                 success: true, 
                 data: bike });
          } catch(err){
            next(err);
        }
    }

    static async deleteBike(req:Request, res:Response){
        try{
                const bike = await BikeStoreService.deleteBike(req.params.productId);
                if (!bike) 
                    return res.status(404).json({ message: 'Bike not found', success: false });
                res.status(200).json({ message: 'Bike deleted successfully', 
                success: true, 
                data: {} });
              }
            catch(err){
                res.status(500).json({ 
                    message: 'Failed to retrieve bikes', 
                    success: false, 
                    error: (err instanceof Error) ? err.message : 'An unknown error occurred' 
             }); 
            }
    }

    static async orderBike(req: Request, res:Response) {
        try{
            const order = await BikeStoreService.orderBike(req.body);
            res.status(201).json({message:'Order created successfully', success: true, data: order});
        } catch(err){
            res.status(500).json({ 
                message: 'Failed to retrieve bikes', 
                success: false, 
                error: (err instanceof Error) ? err.message : 'An unknown error occurred' 
         }); 
        }
        

    }

    static async calculateRevenue(req: Request, res:Response){
        try{
    const totalRevenue = await BikeStoreService.calculateRevenue();
    res.status(200).json({ 
        message: 'Revenue calculated successfully', success: true, 
        data: { totalRevenue } });

        } catch(err){
            res.status(500).json({ 
                message: 'Failed to calculate revenue', 
                success: false, 
                error: (err instanceof Error) ? err.message : 'An unknown error occurred' 
         }); 
        }
    }


}

