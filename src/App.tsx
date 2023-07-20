import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import SerialSearch from "./container/SerialSearch/SerialSearch";


function App() {
  return (
      <>
          <SerialSearch/>
          <Routes>
              <Route path="/shows/:id" element={(
                  <>
                      <h2>Information</h2>
                  </>
              )} />
          </Routes>
      </>

  );
}

export default App;
