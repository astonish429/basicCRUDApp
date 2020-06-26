const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/user', userRoute);


app.get('/', (req, res)=>{
   res.send('CRUD EXAMPLE');
})

app.listen(3000);