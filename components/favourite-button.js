"use client";

import favouriteFill from '@/images/homepage/favourite-fill.svg';
import favourite from '@/images/homepage/favourite.svg';
import { useState } from 'react';
import Image from 'next/image';

export default function FavouriteButton() {
	const [isFavorite, setIsFavorite] = useState(false);

	return(
		<button 
      onClick={() => setIsFavorite(!isFavorite)}
      className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer border-[1px] border-solid border-[#21325B1A]"
    >
      <Image
        src={isFavorite ? favouriteFill : favourite}
        alt="Add to favorites"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
	)
}