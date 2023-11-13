/** Database setup for BizTime. */
const { Client } = require("pg");

let db;
if (process.env.NODE_ENV === "test"){
    db = new Client({
        host: "/var/run/postgresql",
        database: "lunchly_test"
      });
} else {
    db = new Client({
        host: "/var/run/postgresql",
        database: "lunchly"
      });
};

db.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = db;