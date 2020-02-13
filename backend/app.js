const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())


app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-AllowHeaders", "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS")
    next();
})

app.post("/api/reservation", (req, res, next) =>{
    const menu = req.body;
    console.log(menu);
    res.status(201).json({
        message: 'poste added successfully'
    });
})
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