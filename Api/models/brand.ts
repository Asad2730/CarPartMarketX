import { Document, Schema, model } from 'mongoose';

export interface IBrand extends Document {
    name: string;
}

const BrandSchema: Schema = new Schema({
    name: { type: String, required: true }
});

export default model<IBrand>('Brand', BrandSchema);
