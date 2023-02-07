const express = require("express");
const movies = require("./api/movies");
const home = require("./api/home");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.Port || 5000;

app.use("/api/movies", movies);

app.listen(PORT, () => console.log(`Server aberto na porta: ${PORT}`));
