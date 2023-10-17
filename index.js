const express=require("express");
const app=express();
const routes=require('./src/route')
app.use(express.json());
app.use('/',routes)
require('dotenv').config();
const port=process.env.PORT;
// routes.initialize(app);

app.listen(port,()=>console.log(`server listening into ${port}`));