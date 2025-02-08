import express from 'express';
import { testRoute } from '../routes/tests/test-route.js';

const app = express();
// const port = 4444;

app.use(testRoute)

export {app}