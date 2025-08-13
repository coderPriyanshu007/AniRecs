import express from "express";

import {
  getAllTimePopular,
  getPopularAnime,
  getTopRatedAnime,
  getTrendingAnime,
  getUpcomingAnime,
  searchAnime,
} from "../controllers/anime/animeListController.js";
import { getAnimeDetails } from "../controllers/anime/animeController.js";
import { getAnimeNews } from "../controllers/anime/animeNewsController.js";

const router = express.Router();

// Popular Anime
router.get("/popular", getPopularAnime);

// Trending Anime
router.get("/trending", getTrendingAnime);

// Upcoming Anime
router.get("/upcoming", getUpcomingAnime);

// Top Rated Anime
router.get("/top-rated", getTopRatedAnime);

//All Time Popular Anime
router.get("/all-time-popular", getAllTimePopular);

//get news
router.get('/news',getAnimeNews);

//get anime details with id
router.get("/:id", getAnimeDetails);

// Search Anime
router.get("/search", searchAnime);



export default router;
