import axios from "axios";
import generateQuery from "../helper/generateQuery.js";
import fetchAnime from "../helper/fetchAnime.js";
import formatAnimeData from "../helper/formatAnimeData.js";



//get popular anime-----------------------------------------------------------------------------------------------
export const getPopularAnime = async (req, res) => {
  const query = generateQuery({status: 'RELEASING', sort : 'POPULARITY_DESC'});

  try {
    const media = await fetchAnime(query);
    res.json(formatAnimeData(media));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch popular anime" });
  }
};

//get trending anime-----------------------------------------------------------------------------------------------

export const getTrendingAnime = async (req, res) => {
  const query = generateQuery({sort : 'TRENDING_DESC'});

  try {
    const media = await fetchAnime(query);
    res.json(formatAnimeData(media));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch trending anime" });
  }
};

//get Upcoming anime------------------------------------------------------------------------------------------------------
export const getUpcomingAnime = async (req, res) => {
  const query = generateQuery({status :'NOT_YET_RELEASED',sort:'POPULARITY_DESC'});

  try {
    const media = await fetchAnime(query);
    res.json(formatAnimeData(media));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch upcoming anime" });
  }
};

//get top rated anime-----------------------------------------------------------------------------------
export const getTopRatedAnime = async (req, res) => {
  const query = generateQuery({sort:'SCORE_DESC'})

  try {
    const media = await fetchAnime(query);
    res.json(formatAnimeData(media));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top rated anime" });
  }
};

//get popular of all time-------------------------------------------------------------------------------------------

export const getAllTimePopular = async (req,res) => {
  const query = generateQuery({sort:'POPULARITY_DESC'});
    try{
        const media = await fetchAnime(query);
        res.json(formatAnimeData(media));
    }catch(error){
      console.error(error)
        res.status(500).json({error:'error fetching all time popular'});
    }
};

//search anime------------------------------------------------------------------------------------------------------
export const searchAnime = async (req, res) => {
  const { query: searchQuery } = req.query;

  if (!searchQuery) {
    return res.status(400).json({ error: "Search query is required" });
  }

  const query = `
    query ($search: String) {
      Page(perPage: 20) {
        media(search: $search, type: ANIME) {
          id title { romaji english native } coverImage { extraLarge }
          trailer { id site thumbnail }
          episodes duration averageScore popularity genres season seasonYear
          format status trending siteUrl isAdult
          startDate { year month day }
        }
      }
    }`;

  try {
    const response = await axios.post(
      ANILIST_API,
      {
        query,
        variables: { search: searchQuery },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    res.json(formatAnimeData(response.data.data.Page.media));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch search results" });
  }
};
