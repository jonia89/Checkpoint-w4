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

//_______________CRUD_____________________

async function createOffice(name, qty) {
  const client = await pool.connect();
  try {
    const res = await pool.query(
      "INSERT INTO tableware(name, location, starting_year) VALUES ($1, $2, $3)",
      [name, location, starting_year]
    );
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
  client.release();
  pool.end();
}

async function readAllOffice() {
  const client = await pool.connect();
  try {
    const res = await pool.query("SELECT * FROM office");
    return res.rows;
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
  client.release();
  pool.end();
}
async function updateTableware(id) {
  try {
    const res = await pool.query(`UPDATE tablewares WHERE id = $1`, [id]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function updateOffice(id) {
  try {
    const res = await pool.query(`UPDATE office WHERE id = $1`, [id]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function deleteTableware(id) {
  try {
    const res = await pool.query(`DELETE FROM tableware WHERE id = $1`, [id]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function deleteOffice(id) {
  try {
    const res = await pool.query(`DELETE FROM office WHERE id = $1`, [id]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

//readAllTableware();
//createTableware("Muki", "100kpl");
//createTableware("Lasi", "80kpl");
//createTableware("Iso lautanen", "40kpl");
//createTableware("Pieni lautanen", "40kpl");
module.exports = {
  createTableware,
  createOffice,
  readAllTableware,
  readAllOffice,
  updateTableware,
  updateOffice,
  deleteTableware,
  deleteOffice,
};
