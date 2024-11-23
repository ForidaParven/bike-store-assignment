import { Bike, Order } from "./bikeStore.model";
import { IBike, IOrder } from "./bikeStore.interface";


class BikeStoreService {
    // create a bike
    async createBike(data: IBike){
        const bike = new Bike(data);
        return await bike.save();
    }


    // Get All Bikes
    async getAllBikes(filter?: string){
        const query = filter? 
        {$or: [{ name: filter }, { brand: filter }, { category: filter }]}:{};
        return await Bike.find(query)

    }


// Get a Specific Bike
async getBikeById(bikeId: string){
    return await Bike.findById(bikeId)
}

// Update a Bike
async updateBike(bikeId: string, data: Partial<IBike>){
    return await Bike.findByIdAndUpdate(bikeId, data, {new: true});
}


// delete a bike
async deleteBike(bikeId: string){
    return await Bike.findByIdAndDelete(bikeId)
}


// order a bike
async orderBike(data:IOrder){
    const bike = await Bike.findById(data.product);

    if(!bike || bike.quantity < data.quantity) throw new Error(bike? 'Insufficient stock': 'Bike not found');

    // Update bike stock
    bike.quantity -= data.quantity;
    bike.inStock = bike.quantity > 0;
    await bike.save();

    // Create order
    return await new Order(data).save();
}


// calculateRevenue
async calculateRevenue(){
    const revenue = await Order.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ])

    return revenue[0]?.totalRevenue || 0;
}
}

export default new BikeStoreService();