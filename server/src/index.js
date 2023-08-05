require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const formRoute = require("./features/forms/forms.route");
const app = express();
const connect = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/forms" , formRoute);

app.listen(PORT , async () => {
    await connect();
    console.log(`Listening to port : ${PORT}`)
})