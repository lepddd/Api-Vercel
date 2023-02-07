const express = require("express");
const movies = require("./api/movies");
const home = require("./api/home");

const app = express();

const PORT = process.env.Port || 5000;

app.use("/api/movies", movies);

app.listen(PORT, () => console.log(`Server aberto na porta: ${PORT}`));
