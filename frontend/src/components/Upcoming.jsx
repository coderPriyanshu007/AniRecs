import { cn } from "../lib/utils";
import { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { red } from "@mui/material/colors";

const Upcoming = ({ anime }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={anime.url} target="_blank">

      {/* main container */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "w-full  relative  flex mb-6 cursor-pointer",
          hovered && "shadow-red-500 shadow-lg"
        )}
      >
        {/* thumbnail */}
        <img
          className="object-cover h-48"
          src={anime.thumbnail}
          width="120"
          alt=""
        />

        {/* Headings */}
        <div className="ps-4">

          {/* heading 1 */}
          <h1 className={cn("line-clamp-1", hovered && "text-red-400")}>
            {anime.titleNative}
          </h1>

          {/* heading 2 */}
          <h2
            className={cn(
              "lg:line-clamp-1 xl:line-clamp-none",
              hovered && "text-red-400"
            )}
          >
            {anime.titleEnglish || anime.titleRomaji}
          </h2>


          {/* Anime Details */}

          {/* airing */}
          <small className="text-gray-400">
            Airing from : {anime.airingOn}
          </small>

          <br />
            {/* check is adult  */}
          {anime.isAdult ? (
            <small className="text-red-500">18+</small>
          ) : (
            <small className="text-gray-400">G -All Ages </small>
          )}

          {/*  genres */}
          <p className="text-gray-400">
            <small>
              Genres : {anime.genres.join(', ')}
            </small>
          </p>

          {/* season */}
          <p className="text-gray-400">
            <small>
              Season : {anime.season} {anime.year}
            </small>
          </p>

          {/* anime format */}
          <small className="absolute bottom-0 p-1 px-2 text-[10px] m-1 font-bold rounded-sm  bg-red-400 left-0">
            {anime.type}
          </small>

          {/* trailer link */}
          <div className=" p-1 m-1 absolute bottom-0 right-0">
            <PlayCircleOutlineIcon sx={{ fontSize: 20, color: red[500] }} />
            <small
              onClick={() => window.open(anime.trailer)}
              className="hover:text-red-400 "
            > {' '}Watch Trailer
            </small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Upcoming;
