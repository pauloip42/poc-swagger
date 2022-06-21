const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

const router = express.Router();

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

router.get('/customers', (req, res) => {
    res.send('Oks')
});

module.exports = router;