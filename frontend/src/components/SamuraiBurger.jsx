import { useState } from "react";
import { motion ,AnimatePresence } from "motion/react";


const SamuraiBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 group z-50"
    >
      {/* Bar 1 */}
      <motion.span
        initial={false}
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="w-8 h-[3px] bg-red-600 rounded-full origin-center "
      />
      {/* Bar 2 */}
      <motion.span
        initial={{opacity:1}}
        animate={isOpen ? { opacity: 0} : { opacity: 1 }}
        className="w-8 h-[3px] bg-red-600 rounded-full origin-center"
      />
      {/* Bar 3 */}
      <motion.span
        initial={false}
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="w-8 h-[3px] bg-red-600 rounded-full origin-center "
      />
      <AnimatePresence>
        {isOpen && (
        <motion.div 
        layout
        initial ={{height:0}}
        animate ={{height:'auto'}}
        exit={{height:0}}
        transition={{duration:0.3}}
        className={`flex bg-gray-800/30 mt-2 font-[Rajdhani] font-bold  backdrop-blur-sm w-[200px] h-0 flex-col overflow-hidden absolute top-[100%] right-0`}>
          <a className="py-2   hover:bg-red-600" href="">News</a>
          <a className="py-2   hover:bg-red-600" href="">About Us</a>
          <a className="py-2  hover:bg-red-600" href="">Login</a>
          <a className="py-2  hover:bg-red-600" href="">Sign Up</a>
        </motion.div>)}
      </AnimatePresence>
      
        
    </button>
  );
};

export default SamuraiBurger;
