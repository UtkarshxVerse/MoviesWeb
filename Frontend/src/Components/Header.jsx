import React, { useEffect, useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MainContext } from '../Contextt';

export default function Header() {
    const { getsearchname, setMovies, getMovies , search} = useContext(MainContext);

    const searchMovie = (e) => {
        getsearchname(e.target.value);
    }

    useEffect(
        () => {
            getMovies();
        }, [search]
    )

    return (
        <div className='w-screen p-4 bg-black font-mono'>
            {/* logo */}
            <div className='min-w-full flex justify-between'>
                <div>
                    <img src="looogo.png" alt="" width={"170px"} />
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <input type="text" getsearchname={getsearchname} onKeyUp={searchMovie} name='movieName' placeholder='Enter movie name' className=' sm:w-sm md:w-md  lg:w-lg xl:w-xl bg-white px-3 py-1 outline-none' />
                    <IoIosSearch className='text-2xl text-white' />
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='text-white'>Name</div>
                    <div className='bg-white px-4 py-2 rounded-full '>
                        hi
                    </div>
                </div>
            </div>
        </div>
    )
}

