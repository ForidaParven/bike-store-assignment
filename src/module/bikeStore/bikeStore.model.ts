import { model, Schema } from 'mongoose';
import { IBike, IOrder } from './bikeStore.interface';

// Create the Mongoose BikeSchema
const BikeSchema: Schema = new Schema<IBike>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Create the Mongoose OrderSchema
const OrderSchema: Schema = new Schema<IOrder>({
  email: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

// Export the product model
const Bike = model<IBike>('Bike', BikeSchema);

// Export the order model
const Order = model<IOrder>('Order', OrderSchema);

export { Bike, Order };
