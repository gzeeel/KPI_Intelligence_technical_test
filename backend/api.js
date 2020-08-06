const express = require('express');
const fs = require("fs");
const cors = require('cors');

const router = express.Router();
router.use(cors());

const dataPath = "./dataset.json";


// Get all investments (with sorting)
router.get("/investments/:sort/:direction", (req,res) =>{
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }

        dataset = JSON.parse(data);

        keys = Object.keys(dataset);
        keys.forEach(key => {
            dataset[key]['id'] = key;
        });

        // Switch on sorting type and return sorted array
        switch(req.params.sort){
            case "none":
                break;
            case "ville":
                dataset.sort(function(a, b){
                    var A=a['ville'].toLowerCase(), B=b['ville'].toLowerCase()
                    if (A < B) {
                        //sort string ascending
                        if(req.params.direction == "asc") {
                            return -1 
                        } else {
                            return 1 
                        }
                    }
                    if (A > B){
                        if(req.params.direction == "asc") {
                            return 1 
                        } else {
                            return -1 
                        }
                    }
                    return 0 //default return value (no sorting)
                });
                break;
            case "etat_d_avancement":
                dataset.sort(function(a, b){
                    var A=a['etat_d_avancement'].toLowerCase(), B=b['etat_d_avancement'].toLowerCase()
                    if (A < B) {
                        //sort string ascending
                        if(req.params.direction == "asc") {
                            return -1 
                        } else {
                            return 1 
                        }
                    }
                    if (A > B){
                        if(req.params.direction == "asc") {
                            return 1 
                        } else {
                            return -1 
                        }
                    }
                    return 0 //default return value (no sorting)
                });
                break;
        }

        const investmentsList = {
            investments: [],
            total_count: 0
        }

        investmentsList.investments = dataset;
        investmentsList.total_count = dataset.length;
        
        res.send(investmentsList);
        
    });
});


// Get one investment
router.get("/investment/:id", (req,res) =>{
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }

        dataset = JSON.parse(data);

        keys = Object.keys(dataset);
        keys.forEach(key => {
            dataset[key]['id'] = key;
        });
        const investment = dataset[req.params.id];
        res.send(investment);
    });
});


// Update investment
router.post("/investment/:id", (req, res) => {

    let data = require(dataPath);

    const id = req.params.id
    const newData = req.body;

    data[id] = newData;

    const dataToJson = JSON.stringify(data);

    fs.writeFile(dataPath, dataToJson, (err) => {
        if (err) {
            res.status(500);
            res.send({Status: "Failed", Error: err});
            return
        }
        res.status(200);
        res.send({Status: "Success", Error: ""});
    });
});




module.exports = router;