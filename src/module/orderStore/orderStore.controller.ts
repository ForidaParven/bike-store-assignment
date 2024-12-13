import { Request, Response} from 'express';
import { orderStoreService } from './orderStore.service';



const orderBike = async (req: Request, res: Response): Promise<void> => {
  try {

    const bikeData = req.body;
    const order = await orderStoreService.orderBike(req.body);
    res
      .status(201)
      .json({
        message: 'Order created successfully',
        success: true,
        data: order,
      });
  } catch (err) {
    res.status(404).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalRevenue = await orderStoreService.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

export const OrderStoreController = {
  calculateRevenue,
  orderBike,
};
