import { useState } from "react";
import { motion } from "motion/react";
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  {
    /* Glassmorphism Effect */
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="relative max-w-[420px]  p-8 bg-transparent  backdrop-blur-sm rounded-md shadow-xl border border-white/20"
    >
      <h2 className="text-3xl font-semibold text-center text-white tracking-wide mb-6">
        {isLogin ? (
          <p>
            Welcome to Ani<span className="text-red-500">Recs</span>
          </p>
        ) : (
          "Join the Clan"
        )}
      </h2>

      {/* Form Fields */}
      <form className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-sm bg-white/20 border border-white/30 focus:outline-none focus:border-red-400 text-white placeholder-gray-300 shadow-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-sm bg-white/20 border border-white/30 focus:outline-none focus:border-red-400 text-white placeholder-gray-300 shadow-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-sm bg-white/20 border border-white/30 focus:outline-none focus:border-red-400 text-white placeholder-gray-300 shadow-sm"
        />

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="w-full p-3 mt-4 bg-red-500 hover:bg-red-600 rounded-lg font-bold tracking-widest   shadow-md hover:shadow-red-500/50"
        >
          {isLogin ? "Login" : "Sign Up"}
        </motion.button>
      </form>

      <p className="mt-4 text-center text-gray-300 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-red-400 cursor-pointer hover:underline ml-1 font-semibold transition-colors duration-300"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </motion.div>
  );
};

export default LoginSignup;
