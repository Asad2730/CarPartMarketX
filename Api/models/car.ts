import { Document, Schema, model, Types } from 'mongoose';

export interface ICar extends Document {
    name: string;
    model_no: string;
    year: number;
    brandId: Types.ObjectId;
}

const CarSchema: Schema = new Schema({
    name: { type: String, required: true },
    model_no: { type: String, required: true },
    year: { type: Number, required: true },
    brandId: { type: Types.ObjectId, required: true }
});

export default model<ICar>('Car', CarSchema);
