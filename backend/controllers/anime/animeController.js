import axios from "axios";

export const getAnimeDetails = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ error: "Anime ID is required" });
    }
  
    const query = `
      query ($id: Int) {
        Media(id: $id, type: ANIME) {
          id title { romaji english native }
          coverImage { extraLarge }
          bannerImage
          description(asHtml: false)
          trailer{id site}
          episodes
          duration
          averageScore
          genres
          format
          status
          startDate { year month day }
          season seasonYear
          isAdult
          siteUrl
          synonyms
          trailer { id site thumbnail }
          externalLinks { site url icon type color }
          studios { edges { isMain node { id name siteUrl } } }
          characters ( page: 1, perPage: 50) {
            edges {
              role
              node {
                id name { full native } image { large }
              }
              voiceActors(language: JAPANESE) {
                id name { full } image { large }
              }
            }
          }
        }
      }
    `;
  
    try {
      const response = await axios.post(
        "https://graphql.anilist.co",
        { query, variables: { id: parseInt(id) } },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
  
      const anime = response.data.data.Media;
      res.json(anime);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch anime details" });
    }
  };
  