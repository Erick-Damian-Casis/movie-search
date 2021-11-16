import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BackToHome} from "../components/BackToHome"

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

    
    return(<div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={movie.Poster} alt=""/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <h3>{movie.Title}</h3>
                        <p>
                            <br/>
                                <span>{movie.Metascore}</span>
                            <br/>
                                <span>{movie.Plot}</span>
                        </p>
                    </div>
                </div>
            </article>
            <br/>
            <BackToHome/>
        </div>

    )
}