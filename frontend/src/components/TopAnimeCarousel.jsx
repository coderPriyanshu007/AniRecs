// TopAnimeCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VideocamIcon from "@mui/icons-material/Videocam";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect,useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { fetchAllTimePopularAnime } from "../api/animeApi";
import Heart from "./Heart";
import Rating from "./Rating";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";

const TopAnimeCarousel = ({ trendingRef }) => {
  const [topAnime, setTopAnime] = useState([]);
  const navigate = useNavigate();

  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const loadAnime = async () => {
      const anime = await fetchAllTimePopularAnime();
      setTopAnime(anime);
    };
    loadAnime();
  }, []);
  return (
    <section onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      ref={trendingRef} className="w-full bg-black text-white py-12">
      <h2
        data-aos="fade-up"
        className="text-4xl font-[Rajdhani] px-8 md:px-12 md:text-5xl font-bold text-red-600 mb-6"
      >
        All Time Popular
      </h2>
      {/* Neon glow on the left */}

      <Swiper
       onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        data-aos="fade-up"
        speed={500}
      >
        {topAnime.map((anime, index) => (
          <SwiperSlide key={index}>
            {/* image  */}
            <div onClick={()=> navigate(`/anime/${anime.id}`)} className="sm:px-12 px-4 h-[500px] hover:scale-101 transition-transform cursor-pointer">
              <Banner bannerImage={anime.banner} title={anime.titleEnglish} />
            </div>

            {/* details */}
            <div className=" font-[Rajdhani] sm:px-12">
              {/* headings */}
              <h3 className=" px-4  text-4xl font-semibold text-white">
                {anime.titleRomaji}
              </h3>
              <h3 className="px-4  text-4xl font-semibold text-white">
                {anime.titleEnglish} {anime.titleNative}
              </h3>
              <pre className="px-4  text-2xl mb-2">
                {anime.year} {anime.season}    
              </pre>

              {/* episodes rating format */}
              <div className="flex flex-row px-4 text-lg  mb-2 font-bold">
                {/* format */}
                <span className="bg-red-400/80 font-bold py-1 items-center me-1 flex  px-4 rounded-sm   z-10 ">
                  {anime.type || "TV"}
                </span>

                {/* episodes */}
                {anime.episodes && (
                  <span className="p-1 px-4 flex items-center   font-bold rounded-sm me-1 bg-green-600">
                    <VideocamIcon className="me-1" sx={{ fontSize: 20 }} />
                    {anime.episodes}
                  </span>
                )}

                {/* rating */}
                
                  <Rating rating={anime.rating} size={20} textSize={"md"} />
                

                {/* heart */}
                <div className="ms-auto px-4 ">
                  <Heart size={40} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default TopAnimeCarousel;
