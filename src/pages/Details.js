import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const API_KEY = "681fd8a0";

export const Details=()=>{
    const [movie,setMovie]=useState({});
    const {id} = useParams();

    const handleMovie =()=>{
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res=>res.json())
            .then(movie=>{
                setMovie(movie)
            })
    }

    useEffect(()=>{
            handleMovie()
            },[])

    return(<div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt=""/>
            <h3>{movie.Actors}</h3>
            <h1>{movie.Metascore}</h1>
            <span>{movie.Plot}</span>
        </div>
    )
}