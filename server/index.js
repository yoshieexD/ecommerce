import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'



const app = express();
const port = process.env.PORT || 8000;

// Configure env
dotenv.config();

// Database config
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});
//routes 
app.use('/api/v1/auth', authRoute)
// Listen to the port
app.listen(port, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
});
