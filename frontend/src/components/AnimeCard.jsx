import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "../lib/utils";
import VideocamIcon from "@mui/icons-material/Videocam";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime, hovered }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const genreColorMap = {
    Action: "bg-[rgba(220,38,38,0.5)]", // red-600
    Adventure: "bg-[rgba(245,158,11,0.5)]", // amber-500
    Comedy: "bg-[rgba(250,204,21,0.5)]", // yellow-400
    Drama: "bg-[rgba(244,63,94,0.5)]", // rose-500
    Fantasy: "bg-[rgba(99,102,241,0.5)]", // indigo-500
    Horror: "bg-[rgba(51,65,85,0.5)]", // slate-700
    Mystery: "bg-[rgba(124,58,237,0.5)]", // violet-600
    Romance: "bg-[rgba(244,114,182,0.5)]", // pink-400
    "Sci-Fi": "bg-[rgba(59,130,246,0.5)]", // blue-500
    "Slice of Life": "bg-[rgba(163,230,53,0.5)]", // lime-400
    Sports: "bg-[rgba(249,115,22,0.5)]", // orange-500
    Supernatural: "bg-[rgba(232,121,249,0.5)]", // fuchsia-500
    Thriller: "bg-[rgba(55,65,81,0.5)]", // gray-700
    Mecha: "bg-[rgba(82,82,91,0.5)]", // zinc-600
    Psychological: "bg-[rgba(5,150,105,0.5)]", // emerald-600
    Music: "bg-[rgba(56,189,248,0.5)]",
    Ecchi: "bg-purple-500", // sky-400
  };

  const getGenreColor = (genre) => genreColorMap[genre] || "bg-gray-300";

  return (
    <Link to={`/anime/${anime.id}`}>
      <div
        data-aos="fade-up"
        className="  mb-4 relative cursor-pointer hover:shadow-red-500/50 p-2 z-10  hover:shadow-lg  rounded-lg z-1"
      >
        

        {/* Thumbnail */}

        <div className="relative  bottom-fade">
          {anime.isAdult && (
            <span className="absolute p-1 text-[10px] m-1 bg-red-600 font-bold rounded-sm">
              18+
            </span>
          )}
          <img
            src={anime.thumbnail}
            alt={anime.titleEnglish}
            className="w-full h-[250px] object-cover"
          />
        </div>

        <div className="flex flex-row text-sm mb-2 font-bold">
          <span className="bg-red-400/80 flex items-center text-[10px] py-1  px-2 rounded-sm   ">
            {anime.type || "TV"}
          </span>
          {anime.episodes && (
            <small className="p-1 flex items-center rounded-sm ms-1 bg-green-600">
              <VideocamIcon className="" sx={{ fontSize: 16 }} />
              {anime.episodes}
            </small>
          )}
          {anime.duration && (
            <small className="p-1 flex items-center rounded-sm">
              <PlayArrowIcon sx={{ fontSize: 16 }} /> {anime.duration} min
            </small>
          )}
        </div>
        <div className="flex flex-row flew-wrap mb-2">
          {anime.genres.slice(0, 3).map((genre, index) => {
            return (
              <span
                key={index}
                className={`p-[2px] px-1 rounded-md ${getGenreColor(
                  genre
                )} me-2 text-[10px]`}
              >
                {genre}
              </span>
            );
          })}
        </div>
        <h1
          className={cn(
            "font-[Rajdhani]  line-clamp-1 ",
            hovered && "text-red-400"
          )}
        >
          {anime.titleEnglish || anime.titleRomaji}
        </h1>
      </div>
    </Link>
  );
};

export default AnimeCard;
