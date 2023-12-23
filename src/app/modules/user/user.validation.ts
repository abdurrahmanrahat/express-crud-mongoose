import { z } from "zod";

// Define Zod schema for TOrder
const OrderValidationSchema = z.object({
  productName: z.string(),
  price: z.number().positive(),
  quantity: z.number().positive().int(),
});

// Define Zod schema for TUser
const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number().positive().int(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.tuple([z.string(), z.string()]), // Array of strings
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z.array(OrderValidationSchema).optional(), // Optional array of orders
});

export default UserValidationSchema;
