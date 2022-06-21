const express = require('express');
const customers = require('./routes/customersRoute');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Working')});

app.use('/customers', customers);