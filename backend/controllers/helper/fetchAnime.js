import axios from "axios";


const ANILIST_API = "https://graphql.anilist.co";

const fetchAnime = async (query) => {
  const response = await axios.post(
    ANILIST_API,
    {query},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response.data.data.Page.media;
}

export default fetchAnime;