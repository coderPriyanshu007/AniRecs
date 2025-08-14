import axios from "axios";

const API_URL = "https://anirecs.onrender.com/api/anime";



// Get Popular Anime
export const fetchPopularAnime = async () => {
  try {
    const response = await axios.get(`${API_URL}/popular`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular anime:", error.message);
    return [];
  }
};


//Seach anime
export const searchAnime = async (query) => {
  if (!query || query.trim() === "") return [];

  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching anime:", error.message);
    return [];
  }
};


//Get Trending Anime
export const fetchTrendingAnime = async () => {
  try {
    const response = await axios.get(`${API_URL}/trending`);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching top rated anime:", error);
    return [];
  }
};


//Get Top Rated Anime
export const fetchTopRatedAnime = async () => {
  try {
    const response = await axios.get(`${API_URL}/top-rated`);

    return response.data;
  } catch (error) {
    console.error("error fetching top rated anime", error);
    return [];
  }
};



//Get Upcoming Anime
export const fetchUpcomingAnime = async ()=>{
  try{
    const response = await axios.get(`${API_URL}/upcoming`);
    return response.data;
  }catch(error){
    console.error('error fetching upcoming anime',error);
    return[];
  }
}


//Get All Time Popular Anime
export const fetchAllTimePopularAnime = async()=>{
  try{
    const response = await axios.get(`${API_URL}/all-time-popular`);
    return response.data;
  }catch(error){
    console.error('error fetch all time popular anime', error);
    return [];
  }
}

//Get specific anime with id
export const fetchAnimeDetails = async (id)=>{
  try{
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }catch(error){
    console.error('error fetching anime details',error);
  }
}


//fetch latest news about a particular anime with title
export const fetchAnimeNews  =  async ()=>{
 try{
  const response = await axios.get(`${API_URL}/news`);
  return response.data;
 }catch(error){
  console.error('error fetching anime news',error);
 }
}
