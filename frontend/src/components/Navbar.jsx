
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SamuraiBurger from "./SamuraiBurger";
import { Link } from "react-router-dom";

const Navbar = () => {

    useEffect(() => {
        AOS.init({duration:1000});
    }, []);

  return (
    <header className=" bg-black/50 text-white  fixed flex w-full z-100 top-0">
      <nav className=" w-5xl mx-auto p-6  px-2 flex justify-between">
        <div data-aos='fade-right' className="text-3xl flex items-center  font-[Black_Han_Sans] font-bold">
        <span  className="text-gray-300">Ani</span>
        <span  className="text-red-500">Recs</span>
        </div>
       
        <div data-aos='fade-left' className="hidden md:block text-md font-[Rajdhani] text-gray-200 flex items-center">
         <Link  to="/anime-news" className="py-2 px-4 rounded-sm  ms-4 font-bold hover:bg-gray-900 hover:text-red-500">News</Link>
         <Link to="/auth" className="py-2 px-4 rounded-sm  ms-4 font-bold hover:bg-gray-900 hover:text-red-500">Login</Link>
         <Link to="/auth" className="py-2 px-4 rounded-sm bg-red-600 ms-4 font-bold">Sign Up</Link>
        </div>
        <div className="bg-gray-700/30 px-1 md:hidden backdrop-blur-sm rounded-md">
            <SamuraiBurger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
