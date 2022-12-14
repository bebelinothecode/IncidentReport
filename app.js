const express = require('express');
const app = express();
const port = 3000;
// const pool = require('./db');
const incidentreport = require('./routes/incidentroutes');

//middleware
app.use(express.json());

app.use('/api/v1/incidentreport',incidentreport);


app.post("/todos", async (req, res)=> {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
        
    }
})







app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
})

module.exports =app;