import { Bike, Order } from './bikeStore.model';
import { IBike, IOrder } from './bikeStore.interface';

// create a bike
const createBike = async (data: IBike): Promise<IBike> => {
  const bike = new Bike(data);
  return await bike.save();
};

// Get All Bikes
const getAllBikes = async (filter?: string): Promise<IBike[]> => {
  const query = filter
    ? { $or: [{ name: filter }, { brand: filter }, { category: filter }] }
    : {};
  return await Bike.find(query);
};

// Get a Specific Bike
const getBikeById = async (productId: string): Promise<IBike | null> => {
  return await Bike.findById(productId);
};

// Update a Bike
const updateBike = async (
  productId: string,
  updatedData: Partial<IBike>,
): Promise<IBike | null> => {
  return await Bike.findByIdAndUpdate(productId, updatedData, {
    new: true,
    runValidators: true,
  });
};

// delete a bike
const deleteBike = async (bikeId: string): Promise<IBike | null> => {
  return await Bike.findByIdAndDelete(bikeId);
};

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

export const BikeStoreService = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
  calculateRevenue,
  orderBike,
};
