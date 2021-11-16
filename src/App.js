import React from "react";
import 'bulma/css/bulma.css'
// Style
import './App.css';
// Components Import
import {Home} from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";


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
            <Route
                    path='/*'
                    element={<NotFound/>}
            />
        </Routes>
    </div>
  );
}

export default App;
