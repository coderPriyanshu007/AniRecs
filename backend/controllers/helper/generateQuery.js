//helper function to generate query
const generateQuery = ({ status = null, sort = "POPULARITY_DESC" }) => {
  const statusParameter = status ? `status:${status},` : "";
  return ` query {
        Page(perPage: 20) {
          media(type: ANIME, ${statusParameter} sort: ${sort}) {
            id title { romaji english native } coverImage { extraLarge } bannerImage
            trailer { id site thumbnail }
            episodes duration averageScore popularity genres season seasonYear
            format status trending siteUrl isAdult
            nextAiringEpisode { airingAt timeUntilAiring episode }
            startDate { year month day }
            description(asHtml:false)
          }
        }
      }`;
};
export default generateQuery;