import express from 'express';
import mongoose from 'mongoose';
import { PORT, MongoDB_URI } from './config/config';
import routes from './route';

const app = express()

async function startServer() {
   try{
    await mongoose.connect(MongoDB_URI)
    console.log('Connected to MongoDB');
    app.use(express.json())
    app.use('/api',routes)
    app.listen(PORT, () => console.log('Server Running on port:', PORT))
   }catch(ex){
    console.error('Exception thrown while Connecting wih MongoDB :',ex)
   }
}

startServer()