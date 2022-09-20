import { Schema, model } from "mongoose";

interface IUser {
    username: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String
})

const UserModel = model<IUser>('User', userSchema);

export { UserModel }