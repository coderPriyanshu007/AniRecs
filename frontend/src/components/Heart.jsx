import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from "@mui/material/colors";


const Heart = ({ size }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    setLiked(!liked)
  };

  return (
    <button className="cursor-pointer" onClick={handleLike}>
      {liked ? <FavoriteIcon sx={{fontSize:size,color: red[500]}} /> : <FavoriteBorderIcon sx={{fontSize:size, color:red[500]}} />}
    </button>
  );
};

export default Heart;