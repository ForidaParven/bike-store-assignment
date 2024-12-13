import mongoose from 'mongoose';
import { Document } from "mongoose";

interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

export default IOrder;
