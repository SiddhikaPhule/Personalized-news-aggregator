import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import newsRouter from './src/routes/newsRoutes';
import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

const bodyparser = require('body-parser');

const credentials = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(credentials)
  });

const MONGO_URI = process.env.MONGO_URL!;
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api', newsRouter);  // This will handle all routes starting with /api

app.use(bodyparser.json());


if (!MONGO_URI) {
    console.error('MongoDB connection URI is not defined in environment variables');
    process.exit(1); // Exit the process with an error code
}
console.log('MongoDB URL:', process.env.MONGO_URL); // For debugging

mongoose.connect(process.env.MONGO_URL as string)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((error) => console.error('MongoDB connection failed:', error));

// Routes
app.use('/api/users', newsRouter); // Use user routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
