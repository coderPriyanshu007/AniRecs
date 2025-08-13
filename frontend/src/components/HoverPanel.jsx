import Rating from "./Rating";
import { motion } from "motion/react";
import Heart from './Heart'
import AnimeStatus from "./AnimeStatus";
import Trailer from "./Trailer";



const HoverPanel = ({ anime }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={` ml-4 w-80 h-full   bg-gray-600/50 backdrop-blur-sm text-white p-4 flex flex-col rounded-xl shadow-2xl gap-1 `}
      >
        {/* Trailer */}
        {anime.trailer ? (
          <Trailer trailer={anime.trailer} />
        ) :
        null}

        {/* Title */}
        <h3 className="text-lg  font-bold">{anime.titleEnglish}</h3>

        {/* rating */}
        <div className=" mb-2 flex justify-between"><Rating rating={anime.rating} size={18} textSize={'sm'} /><Heart size={25} /></div>
        {/* name native */}
        <p className="text-xs font-bold ">Japanese : {anime.titleNative}</p>

        {/* synonym */}
        <p className="text-xs font-bold">Synonym : {anime.titleRomaji}</p>

        {/* Genre  */}
        <p className="text-xs font-bold">Genre : {anime.genres.join(', ')}</p>

        {/* Seasons (Mock) */}
        <p className="text-xs font-bold">Season : <span className="text-red-300">{anime.season} {anime.year}</span></p>

        {/* aired */}
        {anime.airingOn && (<p className="text-xs font-bold">Aired : {anime.airingOn} </p>)}

        {/* status */}
        {anime.status && <AnimeStatus status={anime.status} />}

        {/* next episode airing  */}
        {anime.nextEpisode && anime.timeUntilAiring ? 
        <div className="bg-green-600 text-center rounded-sm text-md font-semibold p-2">
          <p>Ep-{anime.nextEpisode} airing in {anime.timeUntilAiring}</p>
        </div> 
        : null}
        
      </div>
    </motion.div>
  );
};

export default HoverPanel;
