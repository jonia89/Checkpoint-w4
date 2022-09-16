const dotenv = require("dotenv");
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

async function createTableware(name, qty) {
  const client = await pool.connect();
  try {
    const res = await pool.query(
      "INSERT INTO tableware(name, qty) VALUES ($1, $2)",
      [name, qty]
    );
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
  client.release();
  pool.end();
}

async function readAllTableware() {
  const client = await pool.connect();
  try {
    const res = await pool.query("SELECT * FROM tableware");
    return res.rows;
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
  client.release();
  pool.end();
}
readAllTableware();
//createTableware("Muki", "100kpl");
//createTableware("Lasi", "80kpl");
//createTableware("Iso lautanen", "40kpl");
//createTableware("Pieni lautanen", "40kpl");
module.exports = {
  createTableware,
  readAllTableware,
};
