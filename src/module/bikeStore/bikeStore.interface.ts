import mongoose from 'mongoose';
import { Document } from "mongoose";


// Define the Product (Bike) interface for TypeScript
interface IBike extends Document {
  name: string;
  brand: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number; 
  inStock: boolean;
}

export default IBike;
