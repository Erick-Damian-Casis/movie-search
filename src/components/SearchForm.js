import React, {useState} from "react";

const API_KEY = "681fd8a0";

export const SearchForm =({onResults})=>{
    const [movieInput,setMovieInput]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieInput}`)
            .then(res=>res.json())
            .then(results=>{
                const {Search=[],TotalResults=0}=results
                onResults(Search)
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        value={movieInput}
                        className="input"
                        type="text"
                        onChange={({target: {value}})=>setMovieInput(value)}
                        placeholder="Movie to Search..."/>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>);
}