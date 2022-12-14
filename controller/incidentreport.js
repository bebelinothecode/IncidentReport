const { response } = require('../app');
const pool = require('../db');
const axios = require('axios');


// const weather = async function() {
//     try {
//         const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={c1ba05384a746ce80a36773627b34355}')
//         console.log(response);
//         return response;
//     } catch (error) {
//         console.error(error);
//     }

// }

// const report = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={c1ba05384a746ce80a36773627b34355}')

const getweather = async(req, res)=>{
    const report = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={`c1ba05384a746ce80a36773627b34355`}');

    pool.query('INSERT INTO incidentreport(weather_report) VALUE($1) RETURNING *',[report],(error, results)=>{
        if(error) {
            throw error;
        }
        res.status(201).send(`Weather added with ID}`)
    })

}


const createPost = async(req, res) => {
    const {city, country, incident_description, client_id} = req.body;
    pool.query('INSERT INTO incidentreport (city, country, incident_description, client_id) VALUES ($1, $2, $3, $4) RETURNING *',[city, country, incident_description, client_id],(error, results)=>{
        if(error) {
            throw error;
        }
        res.status(201).send(`Report added with ID:${results.rows[0].client_id}`)
    })    
}


module.exports = {createPost, getweather};