const express = require('express');
const customers = require('./routes/customersRoutes');

const swaggerUI = require('swagger-ui-express');

const YAML = require('yamljs');

const swaggerDoc = YAML.load('./api-docs/v1.0.yml');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/customers', customers);

app.listen(port, () => {console.log('Working')});