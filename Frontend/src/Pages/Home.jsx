import React, { useContext} from 'react'
import MovieCard from '../Components/MovieCard'
import { MainContext } from '../Contextt'

export default function Home() {
  const{movies} = useContext(MainContext);

  return (
    <div className='w-screen bg-black'>
      <div className='w-screen font-mono text-white text-center md: text-6xl py-4'>
        <h1>Trending Now !</h1>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg justify-center gap-6 p-6 bg-gray-900">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}
