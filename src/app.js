import express from "express";

import { serverStart } from "./utils/tools.js";
import { PORT, VIEWS_DIR, PUBLIC_DIR } from "./config/constants.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.static(PUBLIC_DIR));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/movies", (_req, res) => {
  res.render("movies");
});

app.listen(PORT, (error) => serverStart(error, PORT));
