import { Document, Schema, model, Types } from 'mongoose';

export interface IOrderDetail extends Document {
    order_id: Types.ObjectId;
    product_ids: Types.ObjectId[];
    total: number;
    qty: number;
}

const OrderDetailSchema: Schema = new Schema({
    order_id: { type: Types.ObjectId, required: true },
    product_ids: [{ type: Types.ObjectId, required: true }],
    total: { type: Number, required: true },
    qty: { type: Number, required: true }
});

OrderDetailSchema.pre<IOrderDetail>('save', function(next) {
    this.qty = this.product_ids.length;
    next();
});

export default model<IOrderDetail>('OrderDetail', OrderDetailSchema);