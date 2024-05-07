import { Document, Schema, model,Types } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    imageUri: string;
    price: number;
    qty: number;
    categoryId: Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUri: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    categoryId: { type: Types.ObjectId, required: true },
});

export default model<IProduct>('Product', ProductSchema);
