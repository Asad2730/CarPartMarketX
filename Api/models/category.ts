import { Document, Schema, model } from 'mongoose';

export interface ICategory extends Document {
    name: string;
}

const CategorySchema: Schema = new Schema({
    name: { type: String, required: true }
});

export default model<ICategory>('Category', CategorySchema);
