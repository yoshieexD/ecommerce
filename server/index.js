import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';

const app = express();
const port = process.env.PORT || 8000;

// Configure env
dotenv.config();
// const corsOptions = {
//     origin: ['http://localhost:3000', 'https://ecommerce-front-navy.vercel.app'],
//     methods: ["GET", "POST"],
// };

// Database config
connectDB();
// Set up CORS headers to allow requests from 'https://ecommerce-front-navy.vercel.app'
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://ecommerce-front-navy.vercel.app");
//     res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     res.setHeader("Access-Control-Allow-Credentials", "true"); // If you need to support credentials
//     next();
// });

app.use(cors({
    origin: 'https://ecommerce-front-navy.vercel.app',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'], // Include 'Content-Type' in allowed headers
    credentials: true,
}));

// Middlewares
// app.use(cors({
//     origin: function (origin, callback) {
//         if (corsOptions.origin.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Routes
app.use('/api/v1/auth', authRoute);

// app.options('/api/v1/auth/register', (req, res) => {
//     // Set CORS headers for pre-flight request
//     res.header('Access-Control-Allow-Origin', 'https://ecommerce-front-navy.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials', 'true');

//     // Respond with 200 status for pre-flight request
//     res.status(200).send();
// });

// Listen to the port
app.listen(port, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${port}`.cyan.bgWhite);
});
