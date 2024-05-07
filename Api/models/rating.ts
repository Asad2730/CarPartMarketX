import { Document, Schema, model, Types } from 'mongoose';

export interface IRating extends Document {
    user_id: Types.ObjectId;
    payment_id: Types.ObjectId;
    score: number;
    description: string;
    date: Date;
}

const RatingSchema: Schema = new Schema({
    user_id: { type: Types.ObjectId, required: true },
    payment_id: { type: Types.ObjectId, required: true },
    score: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now,required: true }
});

export default model<IRating>('Rating', RatingSchema);
