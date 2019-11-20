const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./routes/api/products');
const userRouter = require('./routes/users');
const authMiddleware = require('./middleware/auth');


const app = express();


app.use(bodyParser.json());
// app.use(express.json())
app.use(userRouter)


const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error));

    app.use(authMiddleware)

app.use('/api/products', products);
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port ${port}` ));