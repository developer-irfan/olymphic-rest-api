const express = require("express");
require("./src/conn/conn");
const Players_Collection = require("./src/model/model");
const app = express();
const port_no = process.env.PORT || 3000;
app.use(express.json());

//create a Player
app.post("/mens" , async(req,res) => {
    try {
        const addingMensRecords = new Players_Collection(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error);
    }
})

//get Players
app.get("/mens" , async(req,res) => {
    try {
        const getMens = await Players_Collection.find({});
        res.send(getMens);
    } catch (error) {
        res.status(400).send(error);
    }
})

//get individual player
app.get("/mens/:id" , async(req,res) => {
    try {
        const _id = req.params.id;
        const getMen = await Players_Collection.findById(_id);
        res.send(getMen);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port_no, (req, res) => {
  console.log(`Port is on ${port_no}`);
});
