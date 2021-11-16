import React from "react";
import 'bulma/css/bulma.css'
// Style
import './App.css';
// Components Import
import {Home} from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import {Details} from "./pages/Details";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route
                   path='/'
                   element={<Home/>}
            />
            <Route
                    path='/details/:id'
                    element={<Details/>}
            />
        </Routes>
    </div>
  );
}

export default App;
