const express = require('express');
const router = express.Router();

var customers = ['Peter Paker', 'Diana Prince', 'Wanda', 'Tchala'];

router.get('/', (req, res) => {
    const customers = readCustomers();
    
    res.status(200);
    res.json(customers);
});

router.post('/', (req, res) => {
    const name = req.body.name;
    createCustomer(name);

    res.status(200);
    res.json(customers);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    deleteCustomer(id);
    res.status(200);
    res.send('Deleted');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const name = req.body.name;

    console.log(name)

    updateCustomer(id, name);

    res.status(200);
    res.json(customers);
});

module.exports = router;

// CUSTOMERS FUNCTIONS

function readCustomers(){
    return customers;
};

function createCustomer(name){
    customers.push(name);
};

function deleteCustomer(id){
    customers.splice(id,1);
};

function updateCustomer(id, name){
    customers[id] = name;
};