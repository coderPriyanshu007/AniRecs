import StarIcon from '@mui/icons-material/Star';


const Rating = ({size,textSize,rating})=>{
    const isGood = rating>80;
    return <span className={`text-${textSize} font-semibold p-1 px-2 ${isGood ? 'bg-green-500':'bg-yellow-500'} rounded-sm justify-center flex items-center`}>
        {rating/10} <StarIcon className='ms-1' sx={{fontSize: size}} />
    </span>
}


export default Rating;