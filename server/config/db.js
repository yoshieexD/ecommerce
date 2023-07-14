import mongoose from "mongoose";
import Colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
};

export default connectDB;
