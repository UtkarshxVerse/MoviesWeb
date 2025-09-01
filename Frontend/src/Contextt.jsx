import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
const MainContext = createContext();

function Context(props) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const getMovies = () => {

        let apiUrl;
        if (search == "") {
            apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
        } else {
            apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
        }

        axios.get(apiUrl).then(
            (success) => {
                setMovies(success.data.results);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const getsearchname = (searchMovie) => {
        setSearch(searchMovie);
    }

    useEffect(
        () => {
            getMovies();
        }, [search]
    )

    return (
        <MainContext.Provider value={{ movies, setMovies, search, setSearch, getMovies, getsearchname }}>
            {
                props.children
            }
        </MainContext.Provider>
    )
}

export default Context;
export { MainContext };
