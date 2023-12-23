import { Model } from "mongoose";

export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: Array<TOrder>;
};

// instance method.
export type UserMethods = {
  isUserExists(userId: number): Promise<TUser | null>;
};

export type UserModel = Model<TUser, {}, UserMethods>;
