require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const experiments = ["AND", "OR", "NOT", "NAND", "NOR"];
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  `mongodb+srv://virtualLab:${process.env.PASSWORD}@cluster0.e6bxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const feedBackSchema = new mongoose.Schema({
    name : String,
    experience : String,
})

const Feedback = mongoose.model('Feedback', feedBackSchema);


app.get("/", (req, res) => {
  res.render("home");
});
app.get("/objective", (req, res) => {
  res.render("Objective");
});
app.get("/listOfExperiments/logicGates", (req, res) => {
  res.render("gates");
});

app.get("/listOfExperiments/Not", (req, res) => {
  const gate = req.params.gate;
  res.render("experiment", { gate });
});

app.get("/listOfExperiments/OR", (req, res) => {
  const gate = req.params.gate;
  res.render("experiment2", { gate });
});
app.get("/listOfExperiments/AND", (req, res) => {
  const gate = req.params.gate;
  res.render("experiment3", { gate });
});
app.get("/listOfExperiments/NOR", (req, res) => {
  const gate = req.params.gate;
  res.render("experiment4", { gate });
});

app.get("/listOfExperiments/NAND", (req, res) => {
  const gate = req.params.gate;
  res.render("experiment5", { gate });
});

app.get("/listOfExperiments", (req, res) => {
  res.render("listOfExperiments", { experiments });
});

app.get("/feedback",(req,res)=>{
  const name = ""
    res.render("feedback",{name})
})
app.post("/feedback",(req,res)=>{
  const {name,experience} = req.body
  const feedback = new Feedback({
    name: name,
    experience
  })  
  feedback.save();
  res.render("feedback",{name})
})
app.listen(3000, () => {
  console.log("server running at 3000");
});
