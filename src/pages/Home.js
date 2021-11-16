import React, {useState} from "react";
import {Title} from "../components/Title";
import {SearchForm} from "../components/SearchForm";
import {ResultsContainer} from "../components/ResultsContainer";

export const Home =()=>{

    const [results, setResults]=useState([]);
    const [usedSearch, setUsedSearch]=useState(false);
    // actualzar el valor de results
    const handleResults=(results)=>{
        setResults(results);
        setUsedSearch(true);
    }
    // renderizado condicional
    const renderResults=()=>{
        return results.length===0 ?
            <p>Sorry! Results not found!</p> : <ResultsContainer results={results}/>
    }

    return(<div>
        <Title>Search Movies</Title>
        <div className="search-form">
            <SearchForm
                // metodo que uso para traer el results, comunicacion de hijo a padre
                onResults={handleResults}
            />
        </div>
        {usedSearch ?
            renderResults(): <small>Use the form to search a movie</small>}
        </div>
    )
}