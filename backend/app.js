const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Reservation = require('./models/reservation');

const app = express();

mongoose.connect('mongodb+srv://Nat:Ria0n2Fm8V0Dyo8q@cluster0-tgajm.mongodb.net/testRestaurantDB?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to database');
})
.catch((error) =>{
    console.log(error);
    console.log('connection failed');
});

app.use(bodyParser.json())


app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS")
    next();
})

app.post("/api/reservation", (req, res, next) =>{
    const reservation = new Reservation({
        Name: req.body.Name,
        NumGuest: req.body.NumGuest    
    });

    console.log(reservation.Name + reservation.NumGuest);
    reservation.save();
    res.status(201).json({
        message: 'reservation added successfully'
    });
})

app.get("/api/reservation", (req, res, next) =>{
    // const Reservation = [
    //     {id: '001', Name: 'beyaynet', NumGuest: 15},
    //     {id: '002', Name: 'Martha', NumGuest: 36},
    //     {id: '003', Name: 'Natty', NumGuest: 1},
    //     {id: '004', Name: 'Leul', NumGuest: 4},
    //     {id: '005', Name: 'Kebede', NumGuest: 3},
    //     {id: '006', Name: 'Buna', NumGuest: 98},
    //     {id: '007', Name: 'Coffee', NumGuest: 99},
    //   ]
    Reservation.find().then(documents =>{
        res.json(
            {
                message: 'reservation fetched!',
                reservation: documents
            }
        )
    }).catch(error=>{
        console.log(error);  
    });
});


app.get("/api/menuitems", (req, res, next) =>{
    const menuItems = [
    {id: 1, Name: 'beyaynet', Price: 10, ImagePath: "../../../assets/images/beyaynet.jpg", Description: "some description"},
    {id: 2, Name: 'doro', Price: 10, ImagePath: "../../../assets/images/doro.jpg", Description: " second description"},
    {id: 3, Name: 'kitfo', Price: 10, ImagePath: "../../assets/images/kitfo.jpg", Description: " second description"},
    {id: 4, Name: 'shiro', Price: 10, ImagePath: "../../assets/images/shiro.jpg", Description: " second description"},
    {id: 5, Name: 'tibs', Price: 10, ImagePath: "../../assets/images/tibs.jpg", Description: " second description"}
    ]
    res.json({
        message: 'menues fetched',
        menuItems: menuItems
    });
});

module.exports = app;