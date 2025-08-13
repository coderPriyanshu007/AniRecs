import { motion } from "motion/react";

const LatestAnimeNews = ({ news }) => {
 

  return (
    (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-red-500 p-5 rounded-xl hover:shadow-red-800 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="text-gray-300 mt-2 text-sm line-clamp-4">{item.contentSnippet}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-red-400 hover:text-red-600 underline"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    )
  );
};

export default LatestAnimeNews;
