import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import AnimeCard from "./AnimeCard";
import HoverPanel from "./HoverPanel";
import { cn } from "../lib/utils";

const AnimeComponent = ({ anime }) => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({x:false,y:false});
  const panelRef = useRef(null);

  // Dynamically check for overflow and reposition
  const checkOverflow = () => {
    if (hovered && panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
     

      if(rect.right>window.innerWidth){
        setPos(prev=> ({...prev,x:true}))
      }
      if(rect.bottom>window.innerHeight){
        setPos(prev=> ({...prev,y:true}))
      }
    }
  };

  // Debounce scroll check
  useEffect(() => {
    const debounce = (fn, delay) => {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
      };
    };

    const handleScroll = debounce(checkOverflow, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovered]);

  // Trigger check when hover state changes
  useEffect(() => {
    const timer = setTimeout(checkOverflow, 250);
    return () => clearTimeout(timer);
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <AnimeCard hovered={hovered} anime={anime} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50",
              pos.y ? "bottom-1/3" : "top-1/3",
              pos.x ? "right-1/2" : "left-1/2"
            )}
          >
            <HoverPanel anime={anime} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimeComponent;
