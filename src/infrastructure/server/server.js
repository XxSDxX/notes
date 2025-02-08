import express from 'express';
import { testRoute } from '../routes/tests/test-route.js';
import { homeRouter } from '../routes/home/homepage.js';

const app = express();

app.use(testRoute)
app.use(homeRouter)

export {app}