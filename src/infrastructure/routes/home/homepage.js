import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/home', (req, res) => {
    res.send('your front end was supposed to draw the home page ( and this router give you list of all notes )')
})

export {homeRouter}