const formatTime = (seconds) => {
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);

  return `${days}d ${hours}hr`;
};

// Helper function to format anime data-------------------------------------------------------------------
const formatAnimeData = (animeList) => {
  return animeList.map((anime) => ({
    id: anime.id,
    episodes: anime.episodes || "",
    duration: anime.duration || "",
    titleEnglish: anime.title.english || "",
    titleRomaji: anime.title.romaji || "",
    titleNative: anime.title.native || "",
    type: anime.format || "",
    thumbnail: anime.coverImage?.extraLarge || "",
    banner: anime.bannerImage || "",
    trailer:
      anime.trailer?.site === "youtube" && anime.trailer?.id
        ? `https://www.youtube.com/embed/${anime.trailer.id}?enablejsapi=1&wmode=opaque&autoplay=0&controls=0&playsinline=1`
        : null,
    rating: anime.averageScore || "N/A",
    status: anime.status || "",
    isAdult: anime.isAdult || "",
    season: anime.season || "?",
    year: anime.seasonYear || "",
    genres: anime.genres || "",
    airingOn: `${anime.startDate?.year || ""}${
      anime.startDate?.month ? "-" + anime.startDate.month : ""
    }${anime.startDate?.day ? "-" + anime.startDate.day : ""}`,
    url: anime.siteUrl || '',
    nextEpisode: anime.nextAiringEpisode?.episode || "",
    timeUntilAiring: anime.nextAiringEpisode
      ? formatTime(anime.nextAiringEpisode.timeUntilAiring)
      : "",
    description: anime.description || "",
  }));
};

export default formatAnimeData;
