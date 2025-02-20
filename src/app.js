import express from "express";

import { serverStart, fetchMedia } from "./utils/tools.js";
import {
  PORT,
  VIEWS_DIR,
  PUBLIC_DIR,
  MOVIE_BASE_URL,
  TV_BASE_URL,
  RENDER_OPTIONS,
} from "./config/constants.js";
import { movieDatabase } from "./data/movieDatabase.js";
import { seriesDatabase } from "./data/seriesDatabase.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.static(PUBLIC_DIR));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/movies", async (_req, res) => {
  RENDER_OPTIONS.movieDb = await fetchMedia(movieDatabase, MOVIE_BASE_URL);

  res.status(200).render("movies", RENDER_OPTIONS);
});

app.get("/series", async (_req, res) => {
  RENDER_OPTIONS.seriesDb = await fetchMedia(seriesDatabase, TV_BASE_URL);

  res.status(200).render("series", RENDER_OPTIONS);
});

app.listen(PORT, (error) => serverStart(error, PORT));
