const express = require("express");
const app = express();
const port = process.env.port || 3000;
const {
  createTableware,
  createOffice,
  readAllTableware,
  readAllOffice,
  updateTableware,
  updateOffice,
  deleteTableware,
  deleteOffice,
} = require("./dbtableware");
app.use(express.json());

app.post("/kitchen/tableware", async (req, res) => {
  console.log(`INFO: POST tableware ${new Date()}`);
  await createTableware(req.body);
  res.sendStatus(200);
});
app.post("/kitchen/office", async (req, res) => {
  console.log(`INFO: POST office ${new Date()}`);
  await createOffice(req.body);
  res.sendStatus(200);
});

app.get("/kitchen/tableware", async (req, res) => {
  console.log(`INFO: GET all from tableware ${new Date()}`);
  await readAllTableware(req.body);
  res.sendStatus(200);
});
app.get("/kitchen/office", async (req, res) => {
  console.log(`INFO: GET all from office ${new Date()}`);
  await readAllOffice(req.body);
  res.sendStatus(200);
});
app.put("/kitchen/tableware", async (req, res) => {
  console.log(`${selectNow()} Info - called to update tableware `);
  await updateTableware(req.body);
  res.sendStatus(200);
});
app.put("/kitchen/office", async (req, res) => {
  console.log(`${selectNow()} Info - called to update office `);
  await updateOffice(req.body);
  res.sendStatus(200);
});

app.delete("/kitchen/tableware", async (req, res) => {
  console.log(`${selectNow()} Info - called to delete tableware `);
  await deleteTableware(req.body);
  res.sendStatus(200);
});
app.delete("/kitchen/office", async (req, res) => {
  console.log(`${selectNow()} Info - called to delete office `);
  await deleteOffice(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
