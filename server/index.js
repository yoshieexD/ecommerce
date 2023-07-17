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

// Database config
connectDB();

//CORS CONFIG
app.use(cors({
    origin: 'https://ecommerce-front-navy.vercel.app',
    methods: ['POST', 'OPTIONS', 'GET', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    credentials: true,
}));


app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Routes
app.use('/api/v1/auth', authRoute);


// Listen to the port
app.listen(port, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${port}`.cyan.bgWhite);
});
