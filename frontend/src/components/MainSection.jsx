import Section from "../components/Section";
import SamuraiLoader from "../components/SamuraiLoader";
import { useState, useEffect } from "react";
import {
  fetchPopularAnime,
  fetchTopRatedAnime,
  fetchTrendingAnime,
  fetchUpcomingAnime,
} from "../api/animeApi";
import SideSection from "./SideSection";

const MainSection = () => {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming,setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

 // delaty to avoid rate limits
 
  // Fetch all anime data
  useEffect(() => {
    const loadAnime = async () => {
      try {
        setLoading(true);

        // 1. Fetch popular
        const popularData = await fetchPopularAnime();
        setPopular(popularData);
     

        // 2. Fetch trending
        const trendingData = await fetchTrendingAnime();
        setTrending(trendingData);
    

        // 3. Fetch top rated
        const topRatedData = await fetchTopRatedAnime();
        setTopRated(topRatedData);
       
        
        
        // 4.Fetch upcoming
        const upcomingData = await fetchUpcomingAnime();
        setUpcoming(upcomingData)
        
      } catch (err) {
        console.error("Error fetching anime data:", err);
        setError("Failed to load anime. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadAnime();
  }, []);

  return (
    <>
      {/* Loading/Error handling */}
      {loading ? (
        <SamuraiLoader />
      ) : error ? (
        <div className="text-center  text-xl py-10 text-red-500">{error}</div>
      ) : (
        <div className="lg:flex">
          <div className="basis-2/3">
            {/* Trending Anime */}
            <Section title="Trending" animeList={trending} />

            {/* Popular Anime */}
            <Section title="Popular This Season" animeList={popular} />

            {/* Highly Rated Anime */}
            <Section title="High Rated" animeList={topRated} />
          </div>
          <div className="basis-1/3">
            <SideSection animeList={upcoming} />
          </div>
         
        </div>
      )}
    </>
  );
};

export default MainSection;
