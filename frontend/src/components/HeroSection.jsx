import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { red } from "@mui/material/colors";





const HeroSection = ({scrollToSection, trendingRef}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const user = false;
  const navigate = useNavigate();

  // Mock data for autocomplete suggestions
  const animeList = [
    "Naruto",
    "Demon Slayer",
    "One Piece",
    "Attack on Titan",
    "Bleach",
    "Death Note",
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSuggestions(
      animeList.filter((anime) =>
        anime.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[100dvh] flex flex-col items-center justify-center text-center">
        <motion.video
        initial={{opacity:0}}
        animate={{opacity:.5}}
        transition={{duration:1,ease:'easeIn'}}
          autoPlay
          muted
          preload="auto"
          alt="Samurai"
          className="absolute inset-0 w-full h-full object-cover "
          loop
        >
          <source src="video/samurai.mp4"  />
        </motion.video>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease:'easeOut' }}
          className="relative z-10"
          
        >
          <h1 className="text-7xl font-[Bebas_Neue] font-bold text-red-500 drop-shadow-md">
            Find Your Next Battle
          </h1>
          <p className="mt-4 text-lg text-gray-300 font-[Red_Hat_Display]">
            Discover anime that match your warrior spirit
          </p>
          <button
            className="mt-6 px-6 py-3 bg-red-600 font-[Rajdhani] cursor-pointer hover:bg-red-700 rounded-md text-white font-semibold text-lg"
            onClick={() => user ?navigate("/recommendations"): navigate('/auth')}
          >
            Get Recommendations
          </button>
        </motion.div>
        {/* Search Bar */}

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opactity: 1, y: 0 }}
          transition={{ duration: 1, ease:'easeOut' }}
          className="container relative  z-10  mx-auto pt-20 px-4 flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Search Anime..."
            className="w-full md:w-1/2 px-4 py-3  bg-transparent  rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none hover:shadow-red-500 shadow-md focus:shadow-red-500 border-b-3 border-red-500 shadow-md  "
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <ul className="w-full search-ul opacity-75   md:w-1/2 bg-gray-800 rounded-lg mt-2">
              {suggestions.map((anime, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-700 cursor-pointer"
                >
                  {anime}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1, delay:1}}
          className="absolute mb-6 bottom-0">
            <KeyboardArrowDownIcon  
              onClick={()=>{ scrollToSection(trendingRef)}}
              className="cursor-pointer opacity-[0.5]   hover:opacity-[1] hover:animate-bounce " 
              sx={{fontSize:100, color: red[500]}} 
            />
        </motion.div>
      </div>
    </>
  );
};
export default HeroSection;
