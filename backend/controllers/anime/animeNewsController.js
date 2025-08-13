import Parser from "rss-parser";


const parser = new Parser();

export const getAnimeNews = async (req, res) => {

  try {
    const feed = await parser.parseURL(
      "https://www.animenewsnetwork.com/all/rss.xml"
    );
    // const news = feed.items.filter(item =>{
    //   item.title?.toLowerCase().includes(keyword);
    //   item.contentSnippet?.toLowerCase().includes(keyword);
    // })
    console.log(feed.items);
    res.json(feed.items);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'error fetching anime news'})
  }
};
