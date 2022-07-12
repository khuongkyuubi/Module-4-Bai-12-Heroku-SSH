import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRoutes from './src/router/product.router';
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');

const DB_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}\`?retryWrites=true&w=majority`;
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.json());
app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})
