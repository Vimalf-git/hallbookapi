const express=require("express");
const app=express();
const routes=require('./src/route')
app.use(express.json());
app.use('/',routes)
// routes.initialize(app);

app.listen(8000)