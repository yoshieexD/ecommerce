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
const corsOptions = {
    origin: ['http://localhost:3000', 'https://ecommerce-front-navy.vercel.app'],
    methods: ["GET", "POST"], // Allow only "GET" and "POST" methods from the specified origins
};

// Database config
connectDB();

// Middlewares
app.use(cors({
    origin: function (origin, callback) {
        if (corsOptions.origin.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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
