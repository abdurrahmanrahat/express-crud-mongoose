import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import { TUser, UserMethods, UserModel } from "./user.interface";

// main user schema
const userSchema = new Schema<TUser, UserModel, UserMethods>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    type: [Object],
  },
});

// pre save middleware/hook- this middleware call before saving any data in db
userSchema.pre("save", async function (next) {
  const user = this;

  // hashing the password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// post save middleware/hook- after saving document into db
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// custom instance method
userSchema.methods.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// make model
export const User = model<TUser, UserModel>("User", userSchema);
