import express from 'express'
import bodyParser from 'body-parser'
import connect from './src/connect.js';
import router from './src/router.js';
import cors from 'cors';

const port = 1967;
const app = express();
const jsonParser = bodyParser.json()
connect();
app.use(cors());
app.use(jsonParser)
app.use(router),
    app.listen(port, () => {
        console.log(`<${port}> Another successfull seizure!`);
    });