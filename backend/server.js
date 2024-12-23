import http from 'http';
import app from './app.js';
import { ENV_VARS } from './config/envVars.js';
const server = http.createServer(app);
server.listen(ENV_VARS.PORT, () => {
    console.log(`Server is running on port ${ENV_VARS.PORT}`);
});