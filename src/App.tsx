import React from 'react';
import {Route, Routes} from "react-router-dom";
import SerialSearch from "./container/SerialSearch/SerialSearch";
import SerialDetails from "./container/SerialDetails/SerialDetails";
import './App.css';


function App() {
  return (
      <>
          <SerialSearch/>
          <Routes>
              <Route path="/shows/:id" element={(<SerialDetails />)} />
          </Routes>
      </>

  );
}

export default App;
