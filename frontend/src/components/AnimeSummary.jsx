import { useState } from "react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";



const AnimeSummary = ({ anime }) => {
  const [active, setActive] = useState("summary");
  return (
    <>
      <div>
        <h2
          onClick={() => setActive("summary")}
          className={cn(
            "text-lg px-8  py-4 font-semibold text-red-500  inline-block mb-2 cursor-pointer",
            active === "summary" && "border-b border-red-700"
          )}
        >
          Summary
        </h2>
        <h2
          onClick={() => setActive("characters")}
          className={cn(
            "text-lg px-8  py-4 font-semibold text-red-500  inline-block mb-2 cursor-pointer",
            active === "characters" && "border-b border-red-700"
          )}
        >
          Characters
        </h2>
      </div>

      <AnimatePresence mode="wait">

        {/* summary section */}
        {active === "summary" && (
          <motion.p
            key="summary"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: -50, opacity: 0 }}
            className="text-md text-gray-200 border-b-1 px-4 md:px-0 mb-4 text-justify border-gray-700 pb-8 leading-relaxed "
            dangerouslySetInnerHTML={{ __html: anime.description }}
          ></motion.p>
        )}

        {/* Characters and voice actors section */}
        {active === "characters" && (
          <motion.div
            key="characters"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: -50, opacity: 0 }}
            className="px-4 py-4"
          >
            {" "}
            {anime.characters && anime.characters?.edges.length > 0 ? (
              <div className="flex gap-8 w-full md:max-w-[700px] h-[500px] overflow-y-auto   justify-center  md:justify-start flex-row flex-wrap">
                {anime.characters.edges.map((char, index) => (
                  <div className="pb-4 w-[200px] flex justify-between border-b-1 border-gray-800 gap-4" key={index}>
                    <div>
                      <div className="w-[100px] rounded-2xl overflow-hidden">
                        <img
                          src={char.node.image.large}
                          className="object-cover w-full float-left h-full"
                          alt=""
                        />
                      </div>
                      <p className="font-bold ">{char.node.name.full}</p>
                      <p className="text-sm leading-2">
                        <small>{char.role}</small>
                      </p>
                    </div>
                    <div>
                      <div className="w-[50px] rounded-2xl overflow-hidden">
                        <img
                          src={char.voiceActors[0]?.image.large}
                          className="object-cover w-full float-left h-full"
                          alt=""
                        />
                      </div>
                      <p className="font-bold text-[10px] ">{char.voiceActors[0]?.name.full}</p>
                      <p className="text-sm leading-2">
                        <small>Voice Actor</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No Data Available</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimeSummary;
