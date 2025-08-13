import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchAnimeDetails } from "../api/animeApi";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import Heart from "../components/Heart";
import Trailer from "../components/Trailer";
import AnimeInfoCard from "../components/AnimeInfoCard";
import AnimeSummary from "../components/AnimeSummary";
import SamuraiLoader from '../components/SamuraiLoader'

const AnimePage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const loadAnime = async () => {
      const animeData = await fetchAnimeDetails(id);
      setAnime(animeData);  
      setLoading(false);
    };
    loadAnime();
  }, []);

  if (!anime) return null;

  const {
    bannerImage = "",
    coverImage = {},
    title = {},
    description = "",
    synonyms = [],
    startDate = {},
    episodes = null,
    status = "",
    trailer = {},
    duration = null,
    season = "",
    seasonYear = null,
    studios = {},
    externalLinks = [],
    genres = [],
    format = "",
    averageScore = null,
    siteUrl = "",
  } = anime || {};



  return loading ? <SamuraiLoader  height="screen" />
  : 
  (<div className="text-white relative pt-10 ">
    {/* Banner Background */}
    <div className="h-[400px] scale-100 w-full opacity-[0.7] absolute top-0">
      <Banner
        bannerImage={bannerImage || coverImage?.extraLarge}
        title={title?.titleEnglish}
      />
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center md:justify-center md:items-start md:pt-60  p-4  gap-10">
      {/* cover and info card */}
     
        {/* Cover */}
      <div
        data-aos="fade-right"
        className="max-w-[250px] max-h-[350px] shadow-2xl  rounded-xl overflow-hidden"
      >
        <img
          src={coverImage?.extraLarge}
          alt="cover"
          className="object-cover w-full h-full"
        />
      </div>
    

      {/* Info */}
      <div className="flex flex-col text-center md:text-start  gap-4">
        <h1
          data-aos="fade-left"
          className="text-2xl md:text-5xl font-[Rajdhani]  font-extrabold text-white"
        >
          {title?.english || title.romaji}
        </h1>
        <p
          data-aos="fade-left"
          className="text-xl   gap-2 italic text-gray-300"
        >
          {title.native} 
        </p>
        <p className="z-10" ><Heart size={30} /></p>

          {/* description */}
        <div data-aos="fade-left" className=" bg-opacity-40 md:max-w-3xl w-full  overflow-x-hidden  text-center md:text-start  rounded-lg ">
          <AnimeSummary anime={anime} />
          
          {/* trailer section */}
          <Trailer trailer={`https://www.youtube.com/embed/${trailer.id}?enablejsapi=1&rel=0&wmode=opaque&autoplay=0&controls=0&playsinline=1`} />

            {/* Details Grid */}
            <div className=" text-xs flex text-start flex-col md:flex-row mt-8 border-t-1 border-gray-800 gap-6 p-4">
              
              {/* anime details */}
              <AnimeInfoCard anime={anime} />
              
              {/* external links */}
              {externalLinks && (<div>
                <div className="text-lg  text-red-500 font-bold">Stream Here</div>
                {
                  externalLinks.filter(item => item.type=="STREAMING")
                                .map((item,index)=>(<a key={index} href={item.url} title={item.site} style={{backgroundColor:item.color}} className={` h-[50x] p-2 rounded-sm w-[50px] inline-block me-4 mt-4`}>
                                  <img key={index} height='100%' width='100%' src={item.icon} />
                                </a>))
                }
              </div>)}
             
            </div>
        
        </div>

        {/* Genres */}
      </div>
    </div>
  </div>)
};

export default AnimePage;
