require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/movie/popular", async (req, res) => {
  // /movie/popular?page=1
  const page = req.query.page;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&page=${page}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/movie/upcoming", async (req, res) => {
  // /movie/upcoming
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/movie/top_rated", async (req, res) => {
  // /movie/top_rated?page=1
  const page = req.query.page;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&page=${page}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/movie/trending", async (req, res) => {
  // /movie/trending
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIE_API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/movie/id", async (req, res) => {
  // /movie/id?movieid=${movieid}
  const movieId = req.query.movieid;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("/movie/name", async (req, res) => {
  // /movie/name?moviename=${movieName}
  const movieName = req.query.moviename;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movieName}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("/movie/similar", async (req, res) => {
  // /movie/similar?movieid=${movieId}
  const movieId = req.query.movieid;

  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.MOVIE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("/movie/cast/id", async (req, res) => {
  // /movie/cast/id?movieid=${movieid}
  const movieId = req.query.movieid;

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.MOVIE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("/movie/trailer/id", async (req, res) => {
  // /movie/trailer/id?movieid=${movieid}
  const movieId = req.query.movieid;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.MOVIE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return res.json(data);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router
