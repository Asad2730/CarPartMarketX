import { Document, Schema, model, Types } from 'mongoose';

export interface IPayment extends Document {
    orderId: Types.ObjectId,
    type: string,

}

const PaymentSchema: Schema = new Schema({
    orderId: { type: Types.ObjectId, require: true },
    type: { type: String, require: true },
})

export default model<IPayment>('Payment', PaymentSchema)