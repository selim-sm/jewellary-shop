import { Heart } from "lucide-react";
import { useState } from "react";

const ToggleBtn = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
  };
  return (
    <>
      <button onClick={toggleFavorite} className="focus:outline-none">
        <Heart
          size={32}
          className={`w-6 h-6 absolute fill-white top-5 right-5 text-black ${
            isFavorited ? "text-red-500 fill-current" : "text-gray-500"
          }`}
        />
      </button>
    </>
  );
};

export default ToggleBtn;
