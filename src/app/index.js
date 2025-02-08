import { app } from "../infrastructure/server/server.js";

// run server
const port = 4444;
app.listen(port)

export {app} // import for root