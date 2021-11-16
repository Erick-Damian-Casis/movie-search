import React from 'react';
import {Movie} from "./Movie";

export const ResultsContainer=({results})=>{

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