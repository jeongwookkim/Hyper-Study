const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require('./schemas');
const port = process.env.PORT || 8080;
connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/board', require('./routes/board'));

app.get('/',(req,res)=>{
    res.json({message: "ok"});
});

app.listen(port,()=>{
    console.log(`server ${port} ready`);
});


