const express = require("express");
const app = express();
const port = process.env.port || 3000;
const { createTableware, readAllTableware } = require("./dbtableware");
app.use(express.json());

app.post("/kitchen", async (req, res) => {
  console.log(`INFO: POST tableware ${new Date()}`);
  await createTableware(req.body);
  res.sendStatus(200);
});

app.get("/kitchen", async (req, res) => {
  console.log(`INFO: GET all from tableware ${new Date()}`);
  await createTableware(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
