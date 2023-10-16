const express = require('express');
const date = new Date();
const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 1)
const hallBookData = [
    // {
    //     roomname: 1,
    //     bookedstatus: "booked",
    //     customername: "kumar",
    //     date: "2023-10-16T14:16:28.134Z",
    //     starttime: "6:00pm",
    //     endtime: "6:00pm"
    // },{
    //     roomname: 2,
    //     bookedstatus: "booked",
    //     customername: "kumar",
    //     date: "2023-10-16T14:16:28.134Z",
    //     starttime: "6:00pm",
    //     endtime: "6:00pm"
    // },{
    //     roomname: 3,
    //     bookedstatus: "booked",
    //     customername: "vimal",
    //     date: "2023-10-16T14:16:28.134Z",
    //     starttime: "6:00pm",
    //     endtime: "6:00pm"
    // }
]

// create room

const roomdata=[];
// console.log(roomdata);

const createRoom=async(req,res)=>{
// console.log(req.body);
    try {

        roomdata.push(req.body);
        console.log(roomdata);

     await   res.send({message:'successfully room created'})
    } catch (error) {
        res.send({message:'failed to room created',error:error.message})
    }

}
// hallBookData.push({vimal:"sdfgh"})
// Booking a room
const bookRoom = async (req, res) => {
    // console.log(req.body);
    // const getRoomaname=hallBookData[hallBookData.length-1].roomname;
    const addRoomData = {
        customername: req.body.customername,
        roomname:hallBookData.length!=0?hallBookData[hallBookData.length-1].roomname+1:1,
        roomid: Math.round(Math.random() + 1),
        date: req.body.date,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        bookingstatus: "booked"
    }
    // console.log(hallBookData);
    try {
        hallBookData.push(addRoomData);
        await res.status(201).send({ message: "successfully created" })
    } catch (error) {
        res.status(500).send({ message: `failed to created ` })
    }
}
// console.log(hallBookData);

// const listAllRoomsData = hallBookData.map((e) => {

//     const limitData = {
//         roomname: e.roomname,
//         bookedstatus: e.bookingstatus,
//         customername: e.customername,
//         date,
//         starttime: e.starttime,
//         endtime: e.endtime
//     }
//     return limitData;
// })
// hallBookData.map(e=>e.customername)
const listAllRooms = async (req, res) => {
    // console.log(hallBookData);
   const listAllRoomsData=  hallBookData.map((e) => {

        const limitData = {
            roomname: e.roomname,
            bookedstatus: e.bookingstatus,
            customername: e.customername,
            date,
            starttime: e.starttime,
            endtime: e.endtime
        }
        return limitData;
    })
    try {
        await res.status(200).send(
            {
                message: "successfully fetched",
                rooms: listAllRoomsData
            }
        )
    } catch (error) {
        await res.status(500).send(
            { message: error.message }
        )
    }
};

// customer's

// const listAllCustomerData = hallBookData.map((e) => {
//     const limitData = {
//         customername: e.customername,
//         roomname: e.roomname,
//         date,
//         starttime: e.starttime,
//         endtime: e.endtime
//     }
//     return limitData;
// })
const listAllCustomer = async (req, res) => {
    const listAllCustomerData = hallBookData.map((e) => {
        const limitData = {
            customername: e.customername,
            roomname: e.roomname,
            date,
            starttime: e.starttime,
            endtime: e.endtime
        }
        return limitData;
    })
    try {
        await res.status(200).send(
            {
                message: "successfully fetched",
                customer: listAllCustomerData
            }
        )
    } catch (error) {
        await res.status(500).send(
            { message: error.message }
        )
    }
};

// group the data by customer name

const groupCustomerData=async(req,res)=>{
    const objData={};
   hallBookData.map((e)=>{
        // newArr.push(e.customername);
        const dup=objData[e.customername]||0
        console.log(dup);
        // console.log(objData[e.customername]||0 +"ji");
        objData[e.customername]=(objData[e.customername]||0)+1;
   })
   console.log(objData);
   try {
    await res.status(500).send({message:'fetched successfully',
    customerbookingcount:objData
 })
   } catch (error) {
    await res.status(500).send({message:'failed to fetch',
    error:error.message
})
   }
  
}
// groupCustomerData();
module.exports =
 { listAllRooms, listAllCustomer, bookRoom ,createRoom,groupCustomerData}