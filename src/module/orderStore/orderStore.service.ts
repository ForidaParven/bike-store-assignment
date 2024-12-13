
import Bike from '../bikeStore/bikeStore.model';
import IOrder from './orderStore.interface';
import Order from './orderStore.model';


// order a bike
const orderBike = async (data: IOrder): Promise<IOrder> => {
  const bike = await Bike.findById(data.product);

  if (!bike || bike.quantity < data.quantity)
    throw new Error(bike ? 'Insufficient stock' : 'Bike not found');

  // Update bike stock
  bike.quantity -= data.quantity;
  bike.inStock = bike.quantity > 0;
  await bike.save();

  // Create order
  return await new Order(data).save();
};

// calculateRevenue
const calculateRevenue = async (): Promise<number> => {
  const revenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);

  return revenue[0]?.totalRevenue || 0;
};

export const orderStoreService = {
  calculateRevenue,
  orderBike,
};
