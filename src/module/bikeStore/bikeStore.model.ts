import { model, Schema } from 'mongoose';
import IBike from './bikeStore.interface';

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


// Export the product model
const Bike = model<IBike>('Bike', BikeSchema);

export default Bike;
