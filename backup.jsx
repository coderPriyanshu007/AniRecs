import { AnimatePresence } from "motion/react";
import { useState,useRef, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import HoverPanel from "./HoverPanel";
import { cn } from "../lib/utils";

const AnimeComponent = ({ anime }) => {
  const [hovered, setHovered] = useState(false);
  const [pos,setPos] = useState({});
  const panelRef = useRef(null);
 
  

  //check overflow of hoverpanel


  //check each time hover state changes
  useEffect(() => {
  
    checkOverflow();
  }, [hovered]);

  document.addEventListener('scroll',checkOverflow)

  return <div
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={()=> setHovered(false)}
    className="relative">
      <AnimeCard  hovered={hovered} anime={anime} />
      <AnimatePresence>
        {hovered && (
          <div ref={panelRef} className={cn('absolute z-50',pos.y ? 'bottom-1/3':'top-1/3',pos.x ?'right-1/2':'left-1/2')}>
            <HoverPanel anime={anime} />
          </div>
        )}
      </AnimatePresence>
    </div>
  
};









export default generateQuery;