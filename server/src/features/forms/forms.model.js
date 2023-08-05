const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    type : String,
    image : String
})
const formSchema = new mongoose.Schema({
headerImage : String,
questions : [questionSchema]
}, 
{
 timestamps : true,
 versionKey : false   
});

const Form = mongoose.model("form" , formSchema);

module.exports = Form;