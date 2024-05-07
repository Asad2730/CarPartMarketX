import { Document, Schema, model, Types } from 'mongoose';

export interface IOrder extends Document {
    user_id: Types.ObjectId;
    address: string;
    date: Date;
    status: 'Pending' | 'Shipped' | 'Received';
}

const OrderSchema: Schema = new Schema({
    user_id: { type: Types.ObjectId, required: true },
    address: { type: String, required: true },
    date: { type: Date, default: Date.now,required: true },
    status: { type: String, enum: ['Pending', 'Shipped' , 'Received'], default: 'Pending' }
});

export default model<IOrder>('Order', OrderSchema);


