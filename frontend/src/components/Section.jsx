import AnimeComponent from "./AnimeComponent";

const Section = ({ title, animeList }) => {
  return (
    <section className="py-10 z-1 px-8 md:px-12">
      <h1
        data-aos="slide-up"
        className="text-red-600 text-4xl md:text-5xl font-extrabold mb-8 inline-block"
        style={{ fontFamily: "'Rajdhani',sans-serif" }}
      >
        {title}
      </h1>
      <div className="grid  gap-2 sm:gap-4 grid-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {animeList.map((anime, index) => (
          <AnimeComponent key={index} anime={anime}/>
        ))}
      </div>
    </section>
  );
};

export default Section;
