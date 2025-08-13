import AnimeStatus from "./AnimeStatus";

const AnimeInfoCard = ({anime})=>{
    return (<div className="">
        {anime.synonyms && anime.synonyms.length > 0 && (
          <div className="mb-2">
            <strong>Synonyms :&nbsp;</strong> <p className="text-pretty">{anime.synonyms.slice(0,4).join(",    ")}</p>
          </div>
        )}
        {anime.title?.native && (
          <div className="mb-2">
            <strong>Japanese :&nbsp;</strong> {anime.title.native}
          </div>
        )}
        {anime.format && (
          <div className="mb-2">
            <strong>Type : </strong>
            <span className="text-pink-500">&nbsp;{anime.format}</span>
          </div>
        )}
        {anime.episodes && (
          <div className="mb-2">
            <strong>Episodes :&nbsp;</strong> {anime.episodes}
          </div>
        )}
        {anime.status && (
         <AnimeStatus status={anime.status} />
        )}
        {anime.duration && (
          <div className="mb-2">
            <strong>Duration:</strong> {anime.duration} minutes
          </div>
        )}
        {anime.startDate  && anime.endDate ? (
          <div className="mb-2">
            <strong>Aired:</strong> {`${anime.startDate.day || '?'} ${anime.startDate.month || '?'} ${anime.startDate.year || '?'}
             to ${anime.endDate.day || '?'} ${anime.endDate.month || '?'} ${anime.endDate.year || '?'}`}
          </div>
        ):null}
        {anime.season && anime.seasonYear ? (
          <div className="mb-2">
            <strong>Season:</strong>{" "}
            <span className="text-pink-400 font-bold">
              {anime.season} {anime.seasonYear}
            </span>
          </div>
        ): null}
        {anime.studios?.edges && anime.studios.edges.length > 0 && (
          <div className="mb-2">
            <strong>Studio: <span className="text-yellow-500">{anime.studios.edges[0].node.name}</span></strong>
          </div>
        )}
        {anime.externalLinks && (<div className="mb-2">
            <strong>Info Links : <a href={anime.siteUrl} title='Visit Anilist' className="hover:text-red-400">
                Anilist
            </a>&nbsp;
            {anime.externalLinks.filter(item => item.type === 'INFO').map((item,index)=> ( 
               <a key={index} className="ms-1 hover:text-red-400" href={item.url} title={item.site}>{item.site}&nbsp;</a>
            ))}
            </strong>
            
        </div>)}
        </div>
        
        )
}

export default AnimeInfoCard;