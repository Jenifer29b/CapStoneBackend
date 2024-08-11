import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';
import authRoutes from './src/routes/authRoutes.js';

import connectDB1 from './src/config/mongodb1.js';

//app config and connectdb
const app = express();
const port = process.env.PORT || 4000;
connectDB()  // database for storing music
connectCloudinary();
connectDB1()  // database for authentication



//middlewares
app.use(express.json());
app.use(cors());

//initilizing routes
app.use('/api/song', songRouter)
app.use('/api/album', albumRouter)
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('API working')
})

app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})


