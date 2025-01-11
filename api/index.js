import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/FreshFusion').then(() => {
    console.log('Connected to MongoDB');
    }
).catch((error) => {
    console.log('Error:', error);
    }
);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

app.get('/', (req, res) => {
    res.send('Hello World');
    });

