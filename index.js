const express = require("express");
const { json } = require("body-parser");

const app = express();
app.use(json());

const port = 3005;
app.listen(port, () => console.log(`Listening on: ${port}`));
