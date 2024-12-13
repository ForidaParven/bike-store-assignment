import { model, Schema } from 'mongoose';
import IOrder from './orderStore.interface';


// Create the Mongoose OrderSchema
const OrderSchema: Schema = new Schema<IOrder>({
  email: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});


// Export the order model
const Order = model<IOrder>('Order', OrderSchema);

export default Order;
