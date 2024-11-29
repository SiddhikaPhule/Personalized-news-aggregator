"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
// import { ensureConnection } from './models/userModel';
// import router from './routes/userRoutes';
// import { loggerMiddleware } from './middlewares/generalMiddleware';
// import { ErrorHandler } from './errorHandlers/errorhandle';
// import { auth } from './middlewares/authMiddleaware';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { PORT, ENV_NAME, MONGO_URL, JWT_SECRET_KEY } = process.env;
const secret = JWT_SECRET_KEY || 'your-secret-key';
const app = (0, express_1.default)();
const port = PORT || 3000;
const dburi = MONGO_URL;
// Connect to MongoDB
// const connectDB = async () => {
//     try {
//         await mongoose.connect(dburi);
//         console.log("Connected with MongoDB successfully");
//         await ensureConnection();
//     } catch (error) {
//         console.log('Error occurred while connecting with DB', error);
//         process.exit(1);
//     }
// };
// connectDB();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Logger Middleware
// app.use(loggerMiddleware);
// Token Generation Route
app.get('/api/token', (req, res) => {
    const token = jsonwebtoken_1.default.sign({ user: 'testUser' }, secret, { expiresIn: '1h' });
    console.log('Generated Token:', token);
    res.json({ token });
});
// Authenticated Routes
// app.use('/api', auth, router);
// Test Route
app.get('/test', (req, res) => {
    res.status(200).send(`Test API is working fine on port: ${port} for news aggregator`);
});
// Error Handling Middleware
// app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
//     console.error(err);
//     res.status(err.status || 500).json({
//         success: false,
//         message: err.msg || 'Internal Server Error',
//     });
// });
// Start Server
app.listen(port, () => {
    console.log(`Server is listening on ${port} : ${ENV_NAME}`);
});
