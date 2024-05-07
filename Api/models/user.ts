import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
    password: string
}

const UserSchema: Schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
})

export default model<IUser>('User', UserSchema)