import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Upcoming from './upcoming';


const SideSection = ({animeList})=>{

    useEffect(() => {
        AOS.init({duration:1000})
    }, []);
    return (
       <div className='py-10 px-8  lg:px-4'>
        <h1 data-aos='fade-left' className='font-[Rajdhani] text-red-500 text-4xl md:text-5xl mb-8 '>Upcoming Seasons</h1>
        
            {
                animeList.map((anime,index)=>{
                    return  (<div key={index} data-aos='fade-left'>
                                <Upcoming anime={anime} />
                            </div>)
                })
           
            }
        <button></button>
       
       </div>
    )
}

export default SideSection;