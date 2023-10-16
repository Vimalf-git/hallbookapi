const express=require('express');

const route=express.Router();
const hallBookRoute=require('../controller/hallBook')
// console.log("enter index route");
route.get('/listallrooms',hallBookRoute.listAllRooms);
route.get('/listallcustomer',hallBookRoute.listAllCustomer);
route.post('/bookroom',hallBookRoute.bookRoom);
route.post('/createroom',hallBookRoute.createRoom);
route.get('/customerCount',hallBookRoute.groupCustomerData);
module.exports=route

