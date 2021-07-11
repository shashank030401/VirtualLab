const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/listOfExperiments/logicGates", (req,res)=>{
    res.render("gates",)
})

app.get("/listOfExperiments/Not",(req,res)=>{
    const gate = req.params.gate
    res.render("experiment",{gate});
})

app.get("/listOfExperiments/OR",(req,res)=>{
    const gate = req.params.gate
    res.render("experiment2",{gate});
})



app.listen(3000,()=>{
    console.log("server running at 3000")
})