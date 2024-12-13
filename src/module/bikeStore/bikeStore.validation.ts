import { z } from 'zod';

// Zod schema for the Bike model
const BikeValidationSchema =  z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number().positive(),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
  description: z.string(),
  quantity: z.number(),
  inStock: z.boolean(),
  _id: z.string().optional(),
  
});
                                        

export { BikeValidationSchema };
