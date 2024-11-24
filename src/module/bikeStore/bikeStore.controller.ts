import { Request, Response, NextFunction } from 'express';
import { BikeStoreService } from './bikeStore.service';

const createBike = async (req: Request, res: Response): Promise<void> => {
  try {
    const bike = await BikeStoreService.createBike(req.body);
    res
      .status(201)
      .json({
        message: 'Bike created successfully',
        success: true,
        data: bike,
      });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to create bike',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const getAllBikes = async (req: Request, res: Response): Promise<void> => {
  try {
    const bikes = await BikeStoreService.getAllBikes(
      req.query.searchTerm as string,
    );
    res
      .status(200)
      .json({
        message: 'Bikes retrieved successfully',
        success: true,
        data: bikes,
      });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const getBikeByID = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const bike = await BikeStoreService.getBikeById(req.params.productId);
    if (!bike)
      res.status(404).json({
        message: 'Bike not found',
        success: false,
      });
    res.status(200).json({
      message: 'Bike retrieved successfully',
      success: true,
      data: bike,
    });
  } catch (err) {
    next(err);
  }
};

const updateBike = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const bike = await BikeStoreService.updateBike(
      req.params.productId,
      req.body,
    );
    res.status(200).json({
      message: 'Bike updated successfully',
      success: true,
      data: bike,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBike = async (req: Request, res: Response): Promise<void> => {
  try {
    const bike = await BikeStoreService.deleteBike(req.params.productId);
    if (!bike)
      res.status(404).json({ message: 'Bike not found', success: false });
    res
      .status(200)
      .json({ message: 'Bike deleted successfully', success: true, data: {} });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const orderBike = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await BikeStoreService.orderBike(req.body);
    res
      .status(201)
      .json({
        message: 'Order created successfully',
        success: true,
        data: order,
      });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalRevenue = await BikeStoreService.calculateRevenue();
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

export const BikeStoreController = {
  createBike,
  getAllBikes,
  getBikeByID,
  updateBike,
  deleteBike,
  calculateRevenue,
  orderBike,
};
