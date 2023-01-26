import express from 'express'
import bodyParser from 'body-parser'
import connect from './src/connect.js';
import router from './src/router.js';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();
console.log(process.env);
const port = process.env.PORT;
const app = express();
const jsonParser = bodyParser.json()
connect();
app.use(cors());
app.use(jsonParser)
app.use(router)
app.listen(port, () => {
    console.log(`<${port}> Another successfull seizure!`);
});

export default app;