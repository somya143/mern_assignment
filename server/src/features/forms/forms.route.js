const express = require("express");
const Form = require("./forms.model");
const app = express.Router();

app.post("/" , async(req,res) => {
    try {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();
    if(!savedForm){
        return res.status(400).send({error: true , message : "form not found"})
    }else{
        return res.status(200).send({error: false , message : "form created successfully" , data:savedForm})
    }
    } catch (error) {
        return res.status(500).send({error: true , message : "Form creation failed"})
    }
});

app.get("/:formId" , async(req,res) => {
try {
    const form = await Form.findById(req.params.formId)
    return res.status(201).send({error:false , message: "form data found successfully"})
} catch (error) {
    return res.status(404).send({error:true , message: "form data not found"})
}
});

app.post("/:formId/responses" , async(req,res) => {
    try {
        const form = await Form.findById(req.params.formId);
        form.questions.forEach((question,id) => {
            question.response = req.body.responses[id] || ""
        });
        const savedData = await form.save();
        return res.send({error: false , message: "data by id post successfully"})
    } catch (error) {
        return res.send({error: true , message : "failed to create response data"})
    }
});

module.exports = app;