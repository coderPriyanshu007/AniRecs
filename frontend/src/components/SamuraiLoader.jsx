import { motion } from "motion/react";

const SamuraiLoader = ({height = 'screen'}) => {
  return (
    <div className={`flex items-center justify-center min-h-${height} bg-black`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
        className="relative w-24 h-2 bg-red-600 rounded-full"
      >
        {/* Blade Effect */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-0 left-0 w-24 h-2 bg-white shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default SamuraiLoader;
