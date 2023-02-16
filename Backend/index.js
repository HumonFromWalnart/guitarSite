const express= require ('express')
const bodyParser= require ('body-parser')
const connect =require  ('./src/connect.js');
const router =require ('./src/router.js');
const cors =require ('cors');
const dotenv =require("dotenv")

dotenv.config();
console.log(process.env);
const port = process.env.PORT;
const app = express();
const jsonParser = bodyParser.json({limit: '10000kb'})
connect();
app.use(cors());
app.use(jsonParser)
app.use(router)
app.listen(port, () => {
    console.log(`<${port}> Another successfull seizure!`);
});

module.exports = app;