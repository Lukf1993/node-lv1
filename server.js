const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// const camera = require('./routes/api/cameras');
// const tripods = require('./routes/api/tripods');
// const accessories = require('./routes/api/accessories');
const products = require('./routes/api/products');


const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error));

// app.use('/api/cameras', camera)
// app.use('/api/accessories', accessories)
// app.use('/api/tripods', tripods)
app.use('/api/products', products)
// app.use('/api/products/:category', products)
app.use(cors())


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port ${port}` ));