import express from 'express';
import cors from 'cors';
//routers
import { router as homepageRouter } from './routers/homePage.js';
import { router as notesRouter } from './routers/notes.js'

const port = 3000;
const app = express();
const allowedOrigins = {origin: 'http://localhost:5173'}
app.use(cors(allowedOrigins))

app.use(homepageRouter)
app.use(notesRouter)
app.listen(port);

export {app}