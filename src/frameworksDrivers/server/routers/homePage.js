import express from 'express';

const router = new express.Router();

router.get('/homepage', (req, res) => {res.send('you are on the homepage')});

export {router};