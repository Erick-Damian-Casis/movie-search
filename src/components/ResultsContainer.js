import React from 'react';
import {Movie} from "./Movie";
import {Details} from "../pages/Details";

export const ResultsContainer=({results})=>{
    const url =new URL(document.location)
    const hasId = url.searchParams.has('id')
    const redirectDetails=()=>{
        return hasId
    }

    return(
        <div className='movie-list'>
                {results?.map((value)=>{return <div className='movie-list-item' key={value.imdbID}>
                    <Movie
                        id={value.imdbID}
                        title={value.Title}
                        year={value.Year}
                        poster={value.Poster}
                    />
                </div>
                })}
            </div>
    )
}