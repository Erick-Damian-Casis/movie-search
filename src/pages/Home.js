import React, {useState} from "react";
import {Title} from "../components/Title";
import {SearchForm} from "../components/SearchForm";
import {ResultsContainer} from "../components/ResultsContainer";

export const Home =()=>{

    const [results, setResults]=useState([]);
    const [usedSearch, setUsedSearch]=useState(false);

    const handleResults=(results)=>{
        setResults(results);
        setUsedSearch(true);
    }

    const renderResults=()=>{
        return results.length===0 ?
            <p>Sorry! Results not found!</p> : <ResultsContainer results={results}/>
    }

    return(<div>
        <Title>Search Movies</Title>
        <div className="search-form">
            <SearchForm
                onResults={handleResults}
            />
        </div>
        {usedSearch ?
            renderResults(): <small>Use the form to search a movie</small>}
        </div>
    )
}