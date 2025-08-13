import { useEffect, useState } from "react";
import { fetchAnimeNews } from "../api/animeApi";
import LatestAnimeNews from "../components/LatestAnimeNews";
import SamuraiLoader from "../components/SamuraiLoader";


const NewsPage = ()=>{
     const [news, setNews] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchNews = async () => {
            const response = await fetchAnimeNews();
            setNews(response);
            setLoading(false);

        };
    
        fetchNews();
      }, []);
      console.log(news);

      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-widest border-b-4 border-red-600 inline-block pb-2">
            <span className="text-red-500">Ani</span>Recs News
          </h1>
    
          {loading ? (
            <SamuraiLoader />)
            : <LatestAnimeNews news={news} />
          
          
        }
        </div>
        </div>
    )
       
        
}


export default NewsPage;