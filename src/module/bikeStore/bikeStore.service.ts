import IBike from "./bikeStore.interface";
import Bike from "./bikeStore.model";


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

export const BikeStoreService = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
