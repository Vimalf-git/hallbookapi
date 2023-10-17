# hallbookapi
This API create for hall-booking based on the client request

END POINTS : https://hallbookingapi-scqm.onrender.com/
For listAllRooms==>https://hallbookingapi-scqm.onrender.com/listallrooms
For ListAllCustomer==>https://hallbookingapi-scqm.onrender.com/listallcustomer
For Create Room Book=>https://hallbookingapi-scqm.onrender.com/bookroom
Eg:  {
    "customername": "kumar",
    "date":"12-10-2023",
    "starttime":"6:00pm",
    "endtime": "6:00pm"
}
For create Room vacant==>https://hallbookingapi-scqm.onrender.com/createroom
Eg:  {
    "noOfSeats":10,
    "amenities":"ac",
    "pricePerHour":450
}
For get customerCount==>https://hallbookingapi-scqm.onrender.com/customerCount
