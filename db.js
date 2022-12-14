const Pool = require('pg').Pool;

const pool = new Pool({
    user:"bebelino",
    password:"123456",
    host:"localhost",
    port:5432,
    database:"postgres"
});

module.exports = pool;