import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js';

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.6b85q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
