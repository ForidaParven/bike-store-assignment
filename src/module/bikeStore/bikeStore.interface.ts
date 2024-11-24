import mongoose from 'mongoose';

// Define the Product (Bike) interface for TypeScript
interface IBike {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
}

interface IOrder {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

export { IBike, IOrder };
