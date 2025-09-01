import React, { useState } from "react";
import { FaPlay, FaStar, FaInfoCircle } from "react-icons/fa";

// MovieCard Component
const MovieCard = ({ movie }) => {
    const[show, setShow] = useState(false);

    return (
        <div onMouseLeave={() => setShow(false)} className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white group">
            {/* Movie Poster */}
            <img
                className="w-full h-72 object-cover"
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt={movie.title}
            />

            {/* Hover Description */}
            <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-100 text-white min-h-full transform " ${show ? 'translate-y-0' : 'translate-y-full'}  transition-transform duration-500 ease-in-out p-4 z-10`}>
                <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                <p className="text-sm text-gray-300 max-full overflow-y-auto">
                    {movie.overview || "No description available."}
                </p>
            </div>

            {/* Movie Details */}
            <div className="p-4">
                <h3 className="text-xl font-semibold truncate">{movie.title}</h3>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 my-2">
                    <FaStar className="mr-1" />
                    <span>{movie.vote_average}</span>
                </div>

                {/* Movie Actions */}
                <div className="flex justify-between items-center mt-4">
                    {/* Play Button */}
                    <button className="bg-blue-500 text-white p-2 rounded-lg flex items-center hover:bg-blue-600">
                        <FaPlay className="mr-2" />
                        Play
                    </button>

                    {/* Info Button */}
                    <button onClick={() => setShow(!show)} className="bg-gray-600 text-white p-2 rounded-lg flex items-center hover:bg-gray-700">
                        <FaInfoCircle className="mr-2" />
                        Description
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;