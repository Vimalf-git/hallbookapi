const date = new Date();
const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 1)
const hallBookModel= require('../model/hallBook');
const hallBookData =hallBookModel.hallBookData;
const roomdata=hallBookModel.roomdata;

// create room


const createRoom=async(req,res)=>{
    try {

        roomdata.push(req.body);
        console.log(roomdata);

     await   res.send({message:'successfully room created'})
    } catch (error) {
        res.send({message:'failed to room created',error:error.message})
    }

}
// Booking a room
const bookRoom = async (req, res) => {
    const addRoomData = {
        customername: req.body.customername,
        roomname:hallBookData.length!=0?hallBookData[hallBookData.length-1].roomname+1:1,
        roomid: Math.round(Math.random() + 1),
        date: req.body.date,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        bookingstatus: "booked"
    }
    try {
        hallBookData.push(addRoomData);
        await res.status(201).send({ message: "successfully created" })
    } catch (error) {
        res.status(500).send({ message: `failed to created ` })
    }
}

const listAllRooms = async (req, res) => {
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
        const dup=objData[e.customername]||0
        objData[e.customername]=(objData[e.customername]||0)+1;
   })
   try {
    await res.status(200).send({message:'fetched successfully',
    customerbookingcount:objData
 })
   } catch (error) {
    await res.status(500).send({message:'failed to fetch',
    error:error.message
})
   }
  
}
module.exports =
 { listAllRooms, listAllCustomer, bookRoom ,createRoom,groupCustomerData}