import { Bike, Order } from './bikeStore.model';
import { IBike, IOrder } from './bikeStore.interface';

export class BikeStoreService {
  // create a bike
  static async  createBike(data: IBike) {
    const bike = new Bike(data);
    return await bike.save();
  }

  // Get All Bikes
  static async  getAllBikes(filter?: string) {
    const query = filter
      ? { $or: [{ name: filter }, { brand: filter }, { category: filter }] }
      : {};
    return await Bike.find(query);
  }

  // Get a Specific Bike
  static async  getBikeById(productId: string) {
    return await Bike.findById(productId);
  }

  // Update a Bike
  static async  updateBike(productId: string, updatedData: Partial<IBike>) {
    return await Bike.findByIdAndUpdate(productId, updatedData,
         { new: true,
            runValidators: true,
          });
  }

  // delete a bike
  static async  deleteBike(bikeId: string) {
    return await Bike.findByIdAndDelete(bikeId);
  }

  // order a bike
  static async  orderBike(data: IOrder) {
    const bike = await Bike.findById(data.product);

    if (!bike || bike.quantity < data.quantity)
      throw new Error(bike ? 'Insufficient stock' : 'Bike not found');

    // Update bike stock
    bike.quantity -= data.quantity;
    bike.inStock = bike.quantity > 0;
    await bike.save();

    // Create order
    return await new Order(data).save();
  }

  // calculateRevenue
  static async  calculateRevenue() {
    const revenue = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);

    return revenue[0]?.totalRevenue || 0;
  }
}


