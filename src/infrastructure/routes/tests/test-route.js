import express from 'express';

const testRoute = express.Router();

testRoute.get('/test', (req, res) => {
    res.send('we have got you request!')
})

export {testRoute}