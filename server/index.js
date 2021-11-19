const express = require("express");
const pino = require("express-pino-logger")();

const dummyData = require("./data");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/apps.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(dummyData));
});

app.get("/login.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ accesstime: null }));
});

app.listen(3001, () =>
    console.log("Express server is running on localhost:3001")
);
